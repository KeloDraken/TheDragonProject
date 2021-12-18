import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ViewPost from "../../components/Posts/viewPost";
import Sidebar from "../../components/Sidebar";

const PostView = () => {
  let { id } = useParams();
  const [post, setPost] = useState<Array<object>>([]);

  const handlePostFetch = () => {
    const endpoint = `http://127.0.0.1:8000/api/v1/posts/get/${id}`;
    axios.get(endpoint).then((response) => {
      setPost(response.data.results);
      console.log(post);
    });
  };

  useEffect(() => {
    handlePostFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        {post.map((item: object, index: number) => {
          return <ViewPost key={index} item={item} />;
        })}
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
};
export default PostView;
