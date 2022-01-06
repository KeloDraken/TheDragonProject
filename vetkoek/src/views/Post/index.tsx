import axios from "axios";

import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import AuthorHeader from "../../components/Posts/AuthorHeader";
import ViewPost from "../../components/Posts/viewPost";
import Sidebar from "../../components/Sidebar";

const PostView = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<any>({});
  const [author, setAuthor] = useState<any>({});

  let { id } = useParams();

  const handlePostFetch = (): void => {
    setLoading(true);
    const endpoint = `http://api.localhost:8000/v1/posts/get/${id}`;
    axios.get(endpoint).then((response): void => {
      setPost(response.data.results[0]);
      setAuthor(response.data.results[0].author);
      setLoading(false);
    });
  };

  useEffect((): void => {
    handlePostFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        {loading ? (
          <div className="flex h-screen justify-center self-center align-center">
            <ActivityIndicator color={"#000"} size={36} />
          </div>
        ) : (
          <ViewPost item={post} />
        )}
      </main>

      <aside className="overflow-y-scroll py-3 h-screen hidden lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        {loading ? (
          <AuthorHeader post={post} loading={true} item={author} />
        ) : (
          <AuthorHeader post={post} loading={false} item={author} />
        )}
        <Sidebar viewPost={true} />
      </aside>
    </div>
  );
};
export default PostView;
