import { View, Text } from "react-native";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { styles } from "./style";

const Navbar = () => {
  return (
    <View>
      <Logo />
      <Link to="/" className="flex mt-3 rounded-lg pl-3 py-3 navlink">
        <i className="material-icons-outlined block lg:hidden xl:hidden 2xl:hidden pl-3 text-black">
          home
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Home</Text>
        </span>
      </Link>
      <Link to="/explore/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          explore
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Explore</Text>
        </span>
      </Link>
      <Link to="/blog/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          article
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Blog</Text>
        </span>
      </Link>
      <Link to="/community/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          forums
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>
            Community
          </Text>
        </span>
      </Link>
      <Link to="/account/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          account_circle
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Profile</Text>
        </span>
      </Link>
      <Link
        to="/about/"
        className="flex px-3 rounded-lg py-3 navlink hidden lg:block xl:block 2xl:block"
      >
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          info
        </i>
        <Text style={styles.navLinkText}>About</Text>
      </Link>
      <Link
        to="/create/"
        className="flex mt-1 bg-gradient-to-r text-black font-bold text-2xl hover:text-white from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-3 rounded-lg py-3"
      >
        <i className="material-icons-outlined block lg:hidden xl:hidden 2xl:hidden  pl-3 text-2xl">
          create
        </i>
        <span className="hidden ml-7 text-2xl lg:block xl:block 2xl:block">
          Create post
        </span>
      </Link>
    </View>
  );
};

export default Navbar;
