import { Text, ImageBackground, View } from "react-native";
import { Link } from "react-router-dom";
import readingTime from "reading-time";
import { styles } from "./style";

interface PostProps {
  item: any;
}

const Post: React.FC<PostProps> = ({ item }) => {
  const renderHasImage = () => {
    return (
      <Link to={`/post/${item.object_id}/`} title={`${item.title}`}>
        <ImageBackground
          source={{ uri: item.cover_image }}
          resizeMode="cover"
          style={styles.postItemContainer}
        >
          <div className="bg-gradient-to-b from-black pt-2 pb-16 px-3">
            <View>
              <Text style={styles.postTitle}>PostedByThisUser</Text>
              <Text style={styles.postCaption}>{item.title}</Text>
              <Text style={styles.postTime}>{stats.text}</Text>
            </View>
          </div>
        </ImageBackground>
      </Link>
    );
  };

  const stats = readingTime(item.text);

  const renderHasNoImage = () => {
    return (
      <Link to={`/post/${item.object_id}/`} title={`${item.title}`}>
        <View style={styles.postItemContainerHasNoImage}>
          <Link to="/user">
            <Text style={styles.postTitleHasNoImage}>PostedByThisUser</Text>
          </Link>

          <Text style={styles.postCaptionHasNoImage}>{item.title}</Text>
          <Text style={styles.postTimeHasNoImage}>{stats.text}</Text>
        </View>
      </Link>
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
