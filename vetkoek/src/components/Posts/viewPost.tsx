import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import slug from "rehype-slug";

interface ViewPostProps {
  item: any;
}

const ViewPost: React.FC<ViewPostProps> = ({ item }) => {
  return (
    <ReactMarkdown
      className="prose my-2 mr-2"
      children={item.text}
      remarkPlugins={[remarkGfm, remarkToc]}
      rehypePlugins={[slug]}
    />
  );
};
export default ViewPost;
