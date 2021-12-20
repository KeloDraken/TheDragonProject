import { view } from "@risingstack/react-easy-state";
import { View, Text } from "react-native";
import { Link } from "react-router-dom";
import { userAuth } from "../../store";
import Logo from "./Logo";
import { styles } from "./style";

const Navbar = view(() => {
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
      <Link to="/lists/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          library_books
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Lists</Text>
        </span>
      </Link>
      <Link to="/tags/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          label
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Tags</Text>
        </span>
      </Link>
      <Link to="/news/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          newspaper
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>News</Text>
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

      {userAuth.isLoggedIn ? (
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
      ) : null}
    </View>
  );
});

export default Navbar;
