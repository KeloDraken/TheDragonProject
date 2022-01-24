import { view } from "@risingstack/react-easy-state";

import { useCookies } from "react-cookie";
import { View, Text } from "react-native";
import { Link } from "react-router-dom";

import { userAuth } from "../../store";

import Logo from "./Logo";
import { styles } from "./style";

const Navbar = view((): JSX.Element => {
  const [cookies] = useCookies();

  let object_id: string = cookies.UOID;

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

      {/* <Link to="/tags/" className="flex px-3 rounded-lg py-3 navlink">
        <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
          tag
        </i>
        <span className="hidden lg:block xl:block 2xl:block">
          <Text style={styles.navLinkText}>Tags</Text>
        </span>
      </Link> */}

      {userAuth.isLoggedIn ? (
        <Link
          to={`/user/${object_id}/`}
          className="flex px-3 rounded-lg py-3 navlink"
        >
          <i className="material-icons-outlined  block lg:hidden xl:hidden 2xl:hidden  pl-3 text-black">
            account_circle
          </i>
          <span className="hidden lg:block xl:block 2xl:block">
            <Text style={styles.navLinkText}>Account</Text>
          </span>
        </Link>
      ) : null}

      {userAuth.isLoggedIn ? (
        <Link
          to="/create/"
          className="flex mt-1 bg-gradient-to-r font-bold from-green-400 to-blue-500 px-3 rounded-lg py-4"
        >
          <i className="material-icons-outlined text-black block lg:hidden xl:hidden 2xl:hidden  pl-3 text-2xl">
            create
          </i>
          <span className="hidden ml-7 text-black text-2xl lg:block xl:block 2xl:block">
            Contribute
          </span>
        </Link>
      ) : null}
    </View>
  );
});

export default Navbar;
