import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { view } from "@risingstack/react-easy-state";
import LoadingView from "./views/Loading";
import "./styles/kelodraken.css";

const AboutView = lazy(() => import("./views/About"));
const HomeView = lazy(() => import("./views/Home"));
const PostView = lazy(() => import("./views/Post"));
const CreatePost = lazy(() => import("./views/Post/CreatePost"));

const App = view(() => {
  return (
    <Suspense fallback={<LoadingView />}>
      <Router>
        <Switch>
          <Route path="/" element={<HomeView />} />

          <Route path="/about/" element={<AboutView />} />
          <Route path="/post/:id/" element={<PostView />} />
          <Route path="/create/" element={<CreatePost />} />
        </Switch>
      </Router>
    </Suspense>
  );
});

export default App;
