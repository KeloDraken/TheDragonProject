import { Text, ImageBackground, View } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "../style"

interface PostProps {
    item: any
}


const Post: React.FC<PostProps> = ({ item }) => {
    return (
        // <ImageBackground source={{ uri: item.thumbnailUrl }} resizeMode="cover" style={styles.postItemContainer}>
        //     <div className="post_author sticky top-0 py-5">
        //         <Link to="/user">
        //             <Text style={styles.postTitle}>PostedByThisUser</Text>
        //         </Link>
        //     </div>
        //     <div className="post_caption">
        //         <Text style={styles.postCaption}>
        //             {item.title}
        //         </Text>
        //         {/* <Link></Link> */}
        //     </div>
        // </ImageBackground>
        <View style={styles.postItemContainer}>
            <div className="post_author sticky top-0 py-5">
                <Link to="/user">
                    <Text style={styles.postTitle}>PostedByThisUser</Text>
                </Link>
            </div>
            <div className="post_caption">
                <Text style={styles.postCaption}>
                    {item.title}
                </Text>
                {/* <Link></Link> */}
            </div>
        </View>
    )
}
export default Post