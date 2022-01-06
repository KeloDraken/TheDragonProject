import { Text, ImageBackground, View } from "react-native";
import { Link } from "react-router-dom";

import readingTime from "reading-time";
import { PostObject } from "../../types";

import { styles } from "./style";

interface PostProps {
  item: PostObject;
}

const Post: React.FC<PostProps> = ({ item }): JSX.Element => {
  const stats = readingTime(item.text);

  const renderHasImage = (): JSX.Element => {
    return (
      <ImageBackground
        source={{ uri: item.cover_image }}
        resizeMode="cover"
        style={styles.postItemContainer}
      >
        <Link to={`/post/${item.object_id}/`} title={`${item.title}`}>
          <div className="bg-gradient-to-b from-black pt-2 pb-16 px-3">
            <View>
              <View style={styles.postTitle} />
              <Text style={styles.postCaption}>{item.title}</Text>
              <Text style={styles.postTime}>{stats.text}</Text>
            </View>
          </div>
        </Link>
      </ImageBackground>
    );
  };

  const renderHasNoImage = (): JSX.Element => {
    return (
      <View style={styles.postItemContainerHasNoImage}>
        <Link
          to={`/user/${item.author.object_id}/`}
        >
          <View>
            <Text style={styles.postAuthor}>
              {item.author.display_name !== "" &&
              item.author.display_name !== null &&
              item.author.display_name !== undefined
                ? item.author.display_name
                : item.author.username}
              {item.author.is_verified ? (
                <span
                  title="creator of kelodraken"
                  className="cursor-pointer ml-1 text-base material-icons-outlined"
                >
                  verified
                </span>
              ) : null}
            </Text>
          </View>
        </Link>
        <Link to={`/post/${item.object_id}/`} title={`${item.title}`}>
          <View>
            <Text style={styles.postCaptionHasNoImage}>{item.title}</Text>
            <Text style={styles.postTimeHasNoImage}>{stats.text}</Text>
          </View>
        </Link>
      </View>
    );
  };

  if (
    item.cover_image !== null &&
    item.cover_image !== undefined &&
    item.cover_image !== ""
  ) {
    return renderHasImage();
  } else {
    return renderHasNoImage();
  }
};
export default Post;
