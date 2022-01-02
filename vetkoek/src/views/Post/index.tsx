import axios from "axios";

import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ViewPost from "../../components/Posts/viewPost";
import Sidebar from "../../components/Sidebar";
import { PostObject } from "../../types";

const PostView = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<Array<PostObject>>([]);

  let { id } = useParams();

  const handlePostFetch = (): void => {
    const endpoint = `http://api.localhost:8000/v1/posts/get/${id}`;
    axios.get(endpoint).then((response): void => {
      setPost(response.data.results);
      setLoading(false);
    });
  };

  useEffect((): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
          post.map((item: PostObject, index: number): JSX.Element => {
            return <ViewPost key={index} item={item} />;
          })
        )}
      </main>

      <aside className="overflow-y-scroll h-screen hidden lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
};
export default PostView;
