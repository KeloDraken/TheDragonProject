import { View, Text } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "./style"

const Navbar = () => {
    return (
        <View>
            <Link to="/" className="flex rounded-3xl mt-7 pl-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">home</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={styles.navLinkText}>Home</Text>
                </span>
            </Link>
            <Link to="/explore" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">explore</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={styles.navLinkText}>Explore</Text>
                </span>
            </Link>
            <Link to="/blog" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">article</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={styles.navLinkText}>Blog</Text>
                </span>
            </Link>
            <Link to="/community" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">forums</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={[styles.navLinkText, styles.communityLinkText]}>Community</Text>
                </span>
            </Link>
            <Link to="/account" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">account_circle</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={styles.navLinkText}>Profile</Text>
                </span>
            </Link>
            <Link to="/about" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">info</i>
                <span className="hidden md:block lg:block xl:block 2xl:block">
                    <Text style={styles.navLinkText}>About</Text>
                </span>
            </Link>
        </View>
    )
}

export default Navbar