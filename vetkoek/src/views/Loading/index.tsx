import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ActivityIndicator, Text, View } from "react-native";

import { userAuth } from "../../store";

import { styles } from "./style";

const LoadingView = view((): JSX.Element => {
  const [cookies, setCookie] = useCookies();

  const setUserObjectID = (object_id: string, username: string): void => {
    setCookie("UOID", object_id, {
      path: "/",
      maxAge: 2628000, // lasts 1 month
    });
    setCookie("username", username, {
      path: "/",
      maxAge: 2628000,
    });
  };

  const getUserID = (token: string): void => {
    const endpoint: string = `${process.env.REACT_APP_API_HOST_NAME}/v1/users/object_id/`;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response): void => {
        console.log(response.data);
        const object_id: string = response.data.object_id;
        const username: string = response.data.username;
        setUserObjectID(object_id, username);
      });
  };

  useEffect((): void => {
    let token: string = cookies.UIDT;

    if (token !== null && token !== undefined) {
      userAuth.isLoggedIn = true;
      const userObjectID: string = cookies.UOID;
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
      </View>
    </View>
  );
});

export default LoadingView;
