import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, View } from "react-native";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import Sidebar from "../../components/Sidebar";
import { userAuth } from "../../store";

import { styles } from "./styles";

const Profile = view((): JSX.Element => {
  const [user, setUser] = useState<any>({});

  const [cookies] = useCookies();

  let { username } = useParams();
  const object_id: string = cookies.UOID!;

  useEffect((): void => {
    if (!userAuth.isLoggedIn) {
      window.location.replace("/");
    } else {
      const endpoint: string = `http://api.localhost:8000/v1/users/get/?id=${username}`;

      axios.get(endpoint).then((response): void => {
        setUser(response.data);
      });
    }
  }, [username]);

  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        <View style={styles.pageHeadingContainer}>
          <View>
            <Text style={styles.pageHeading}>{user.display_name}</Text>
            <Text style={styles.pageSubheading}>{user.username}</Text>
          </View>
        </View>
        <ProfileHeader
          object_id={
            object_id !== null && object_id !== undefined ? object_id : ""
          }
          item={user}
        />
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
});
export default Profile;
