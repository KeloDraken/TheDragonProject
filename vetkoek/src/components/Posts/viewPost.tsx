import ReactMarkdown from "react-markdown";
import { View } from "react-native";

import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import slug from "rehype-slug";

import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";
import TimeAgo from "javascript-time-ago";

import { PostObject } from "../../types";

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

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
