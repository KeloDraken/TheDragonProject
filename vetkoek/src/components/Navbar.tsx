import { View, Text } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "./style"

const Navbar = () => {
    return (
        <View>
            <Link to="/" className="flex rounded-3xl mt-7 pl-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">home</i>
                <Text style={styles.navLinkText}>Home</Text>
            </Link>
            <Link to="/explore" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">explore</i>
                <Text style={styles.navLinkText}>Explore</Text>
            </Link>
            <Link to="/blog" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">article</i>
                <Text style={styles.navLinkText}>Blog</Text>
            </Link>
            <Link to="/community" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">forums</i>
                <span className="text-xl -mt-1">Community</span>
            </Link>
            <Link to="/account" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">account_circle</i>
                <Text style={styles.navLinkText}>Profile</Text>
            </Link>
            <Link to="/about" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">info</i>
                <Text style={styles.navLinkText}>About</Text>
            </Link>
        </View>
    )
}

export default Navbar