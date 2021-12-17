import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `Just a link: https://reactjs.com.`;

const ViewPost = () => {
  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
};
export default ViewPost;
