import { Text, ImageBackground, View } from "react-native";
import { Link } from "react-router-dom";
import { styles } from "../style";

interface PostProps {
  item: any;
}

const Post: React.FC<PostProps> = ({ item }) => {
  return (
    <ImageBackground
      // source={{ uri: item.thumbnailUrl }}
      source={{ uri: "https://picsum.photos/200/300" }}
      resizeMode="cover"
      style={styles.postItemContainer}
    >
      <div className="post_caption">
        <View>
          <Link to="/user">
            <Text style={styles.postTitle}>PostedByThisUser</Text>
          </Link>
        </View>
        <View>
          <Text style={styles.postCaption}>{item.title}</Text>
        </View>
      </div>
    </ImageBackground>
  );
};
export default Post;
