import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ViewPostProps {
  item: any;
}

const ViewPost: React.FC<ViewPostProps> = ({ item }) => {
  return <div className="prose" dangerouslySetInnerHTML={{ __html: item.text_rendered }} />;
};
export default ViewPost;
