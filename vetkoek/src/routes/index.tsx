import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import LoadingView from "../views/Loading";
import "../styles/kelodraken.css";

import Error404View from "./errors";

const PrivacyView = lazy(() => import("../views/Privacy"));
const AboutView = lazy(() => import("../views/About"));
const CreatePost = lazy(() => import("../views/Post/CreatePost"));
const HomeView = lazy(() => import("../views/Home"));
const PostView = lazy(() => import("../views/Post"));
const Profile = lazy(() => import("../views/Profile"));
const Tags = lazy(() => import("../views/Tags"));

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingView />}>
      <Router>
        <Switch>
          <Route path="/" element={<HomeView />} />
          <Route path="/about/" element={<AboutView />} />
          <Route path="/privacy/" element={<PrivacyView />} />
          <Route path="/post/:id/" element={<PostView />} />
          <Route path="/create/" element={<CreatePost />} />
          <Route path="/tags/" element={<Tags />} />
          <Route path="/user/:username/" element={<Profile />} />
          <Route path="*" element={<Error404View />} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
