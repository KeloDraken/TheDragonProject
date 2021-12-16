import { Text, View } from "react-native";
import { Link } from "react-router-dom";
import { styles } from "../style";

interface PostProps {
  item: any;
}

const Post: React.FC<PostProps> = ({ item }) => {
  return (
    <View style={styles.postItemContainer}>
      <div className="sticky top-0 py-5">
        <Link to="/user">
          <Text style={styles.postTitle}>PostedByThisUser</Text>
        </Link>
      </div>
      <div>
        <Text style={styles.postCaption}>{item.title}</Text>
      </div>
    </View>
  );
};
export default Post;
