import { View, Text } from "react-native";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { styles } from "../style";

const Navbar = () => {
  return (
    <View>
      <Logo />
      <Link to="/" className="flex mt-3 rounded-3xl pl-3 py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">home</i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Home</Text>
        </span>
      </Link>
      <Link to="/explore/" className="flex px-3 rounded-3xl py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">explore</i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Explore</Text>
        </span>
      </Link>
      <Link to="/blog/" className="flex px-3 rounded-3xl py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">article</i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Blog</Text>
        </span>
      </Link>
      <Link to="/community/" className="flex px-3 rounded-3xl py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">forums</i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={[styles.navLinkText, styles.communityLinkText]}>
            Community
          </Text>
        </span>
      </Link>
      <Link to="/account/" className="flex px-3 rounded-3xl py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">
          account_circle
        </i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Profile</Text>
        </span>
      </Link>
      <Link to="/about/" className="flex px-3 rounded-3xl py-3 navlink">
        <i className="material-icons-outlined pl-3 text-black">info</i>
        <span className="hidden md:block lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>About</Text>
        </span>
      </Link>
    </View>
  );
};

export default Navbar;
