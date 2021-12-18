import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./styles/kelodraken.css";

import AboutView from "./views/About";
import HomeView from "./views/Home";
import PostView from "./views/Post";
import CreatePost from "./views/Post/CreatePost";

function App() {
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
}

export default App;
