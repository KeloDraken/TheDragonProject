import { Text, ImageBackground } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Link } from "react-router-dom";
import { styles } from "../style";

interface PostProps {
  item: any;
}

const Post: React.FC<PostProps> = ({ item }) => {
  return (
    <ImageBackground
      source={{ uri: item.thumbnailUrl }}
      resizeMode="cover"
      imageStyle={{ borderRadius: wp("2") }}
      style={styles.postItemContainer}
    >
      <div className="post_author sticky top-0 py-5">
        <Link to="/user">
          <Text style={styles.postTitle}>PostedByThisUser</Text>
        </Link>
      </div>
      <div className="post_caption">
        <Text style={styles.postCaption}>{item.title}</Text>
        {/* <Link></Link> */}
      </div>
    </ImageBackground>
  );
};
export default Post;
