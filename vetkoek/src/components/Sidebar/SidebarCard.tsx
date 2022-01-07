import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Link } from "react-router-dom";

import readingTime from "reading-time";

import { PostObject } from "../../types";

import { styles } from "./style";

interface SidebarProps {
  cardTitle: string;
  posts: Array<PostObject>;
  loading: boolean;
}

const SidebarCard: React.FC<SidebarProps> = ({
  cardTitle,
  posts,
  loading,
}): JSX.Element => {
  const renderPost = (post: PostObject): JSX.Element => {
    const stats: string = readingTime(post.text).text;

    return (
      <View>
        <Link to={`/post/${post.object_id}`} className="link_hover px-5 py-3">
          {post.text ? (
            <View>
              <Text style={styles.sidebarLinkInfo}>{stats}</Text>
            </View>
          ) : null}
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
      {posts.map((post: PostObject, index: number): JSX.Element => {
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
