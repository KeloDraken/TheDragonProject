import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./style";
import ReactTimeAgo from "react-time-ago";

import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";
import TimeAgo from "javascript-time-ago";

interface SidebarProps {
  cardTitle: string;
  posts: Array<object>;
  loading: boolean;
}

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

const UpdatesCard: React.FC<SidebarProps> = ({ cardTitle, posts, loading }) => {
  const renderPost = (post: any) => {
    return (
      <View>
        <div className="link_hover cursor-pointer px-5 py-3">
          <Text style={styles.sidebarLinkInfo}>
            <ReactTimeAgo date={Date.parse(post.datetime_created)} />
          </Text>
          <View>
            <Text style={styles.sidebarLinkTitle}>{post.title}</Text>
          </View>
        </div>
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
export default UpdatesCard;
