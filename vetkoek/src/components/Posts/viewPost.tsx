import ReactMarkdown from "react-markdown";
import { Text, View } from "react-native";
import ReactTimeAgo from "react-time-ago";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import slug from "rehype-slug";
import { styles } from "../style";

import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";
import TimeAgo from "javascript-time-ago";

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

interface ViewPostProps {
  item: any;
}

const ViewPost: React.FC<ViewPostProps> = ({ item }) => {
  return (
    <View>
      <ReactMarkdown
        className="prose my-2 mr-2"
        children={item.text}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[slug]}
      />
      <hr />
      <Text style={styles.postFooter}>
        <ReactTimeAgo date={item.datetime_created} />
      </Text>
    </View>
  );
};
export default ViewPost;
