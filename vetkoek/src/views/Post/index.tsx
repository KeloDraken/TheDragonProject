import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ViewPost from "../../components/Posts/viewPost";
import Sidebar from "../../components/Sidebar";

const PostView = () => {
  let { id } = useParams();
  const [post, setPost] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePostFetch = () => {
    const endpoint = `http://127.0.0.1:8000/api/v1/posts/get/${id}`;
    axios.get(endpoint).then((response) => {
      setPost(response.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
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
          post.map((item: object, index: number) => {
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
