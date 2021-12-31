import ReactMarkdown from "react-markdown";
import { Text, View } from "react-native";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import slug from "rehype-slug";

import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";
import TimeAgo from "javascript-time-ago";

import { styles } from "./style";

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

interface ViewPostProps {
  item: any;
}

const ViewPost: React.FC<ViewPostProps> = ({ item }): JSX.Element => {
  return (
    <View>
      <ReactMarkdown
        className="prose my-3"
        children={item.text}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[slug]}
      />
      <hr />
      <Link to={`/user/${item.author.object_id}/`}>
        <Text style={styles.postFooter}>{item.author.username}</Text>
      </Link>
      <ReactTimeAgo date={Date.parse(item.datetime_created)} />
    </View>
  );
};
export default ViewPost;
