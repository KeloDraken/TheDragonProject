import { Text, ImageBackground } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "../style"

const Post = () => {
    return (
        <ImageBackground source={{ uri: "https://picsum.photos/500/600" }} resizeMode="cover" style={styles.postItemContainer}>
            <div className="post_author sticky top-0 py-5">
                <Link to="/user">
                    <Text style={styles.postTitle}>PostedByThisUser</Text>
                </Link>
            </div>
            <div className="post_caption">
                <Text style={styles.postCaption}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reiciendis minima voluptatem dolores doloremque!
                    Quas adipisci vel, sequi, cumque totam modi illo molestiae nulla cupiditate
                    odio perspiciatis, ad assumenda placeat aliquid!
                </Text>
                {/* <Link></Link> */}
            </div>
        </ImageBackground>
    )
}
export default Post