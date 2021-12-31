import { view } from "@risingstack/react-easy-state";
import { Text, View } from "react-native";

import Feed from "../../components/Posts/Feed";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AuthForm from "../../components/Auth/Form";

import { userAuth } from "../../store";
import { styles } from "./styles";

const HomeView = view((): JSX.Element => {
  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        {userAuth.isLoggedIn === false ? <AuthForm /> : null}

        {userAuth.isLoggedIn === true ? (
          <View style={styles.pageHeadingContainer}>
            <Text style={styles.pageHeading}>Latest</Text>
          </View>
        ) : null}

        <Feed />
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
});
export default HomeView;
