import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ActivityIndicator, Text, View } from "react-native";
import { userAuth } from "../../store";
import { styles } from "./style";

const LoadingView = view(() => {
  const [cookies, setCookie] = useCookies();

  const setUserObjectID = (object_id: string, username: string) => {
    setCookie("UOID", object_id, {
      path: "/",
      maxAge: 2628000,
    });
    setCookie("username", username, {
      path: "/",
      maxAge: 2628000,
    });
  };

  const getUserID = (token: string) => {
    const endpoint = "http://127.0.0.1:8000/api/v1/users/object_id/";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const object_id = response.data.object_id;
        const username = response.data.username;
        setUserObjectID(object_id, username);
      });
  };

  useEffect(() => {
    let token = cookies.UIDT;
    if (token !== null && token !== undefined) {
      userAuth.isLoggedIn = true;
      const userObjectID = cookies.UOID;
      if (userObjectID === null || userObjectID === undefined) {
        getUserID(token);
      }
    } else {
      userAuth.isLoggedIn = false;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.UIDT, cookies.UOID]);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles._logoText}>kelodraken</Text>
        <ActivityIndicator color={"#000"} size={30} />
        {/* <Text>Ett projekt av Samkelo Drackner</Text> */}
      </View>
    </View>
  );
});

export default LoadingView;