import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { Link } from "react-router-dom";
import readingTime from "reading-time";

interface SidebarProps {
  cardTitle: string;
  posts: Array<object>;
  loading: boolean;
}

const SidebarCard: React.FC<SidebarProps> = ({ cardTitle, posts, loading }) => {
  const renderPost = (post: any) => {
    const stats = readingTime(post.text);

    return (
      <View>
        <Link to={`/post/${post.object_id}`} className="link_hover px-5 py-3">
          <View>
            <Text style={styles.sidebarLinkInfo}>{stats.text}</Text>
          </View>
          <View>
            <Text style={styles.sidebarLinkTitle}>{post.title}</Text>
          </View>
        </Link>
      </View>
    );
  };

  return (
    <View style={styles.sidebarCardContainer}>
      <Text style={styles.sidebarCardHeading}>{cardTitle}</Text>
      {posts.map((post: any, index: number) => {
        return <View key={index}>{renderPost(post)}</View>;
      })}
      {loading && posts.length === 0 ? (
        <div className="flex py-20 justify-center self-center align-center">
          <ActivityIndicator color={"#000"} size={30} />
        </div>
      ) : null}
    </View>
  );
};
export default SidebarCard;
