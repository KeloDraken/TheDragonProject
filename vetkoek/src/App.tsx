import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import AboutView from "./views/About";
import HomeView from "./views/Home";
import PostView from "./views/Post";
import CreatePost from "./views/Post/CreatePost";

import "./styles/kelodraken.css";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";
import { view } from "@risingstack/react-easy-state";
import { userAuth } from "./store";

const App = view(() => {
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
    <Router>
      <Switch>
        <Route path="/" element={<HomeView />} />

        <Route path="/about/" element={<AboutView />} />
        <Route path="/post/:id/" element={<PostView />} />
        <Route path="/create/" element={<CreatePost />} />
      </Switch>
    </Router>
  );
});

export default App;
