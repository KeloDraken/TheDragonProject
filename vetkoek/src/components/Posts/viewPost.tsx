import ReactMarkdown from "react-markdown";
import { View } from "react-native";

import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import slug from "rehype-slug";

import { PostObject } from "../../types";

interface ViewPostProps {
  item: PostObject;
}

const ViewPost: React.FC<ViewPostProps> = ({ item }): JSX.Element => {
  return (
    <View>
      <ReactMarkdown
        className="prose my-3"
        linkTarget={"_blank"}
        children={item.text}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[slug]}
      />
      <div className="my-7" />
    </View>
  );
};
export default ViewPost;
