import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./styles/kelodraken.css";

import AboutView from "./views/About";
import HomeView from "./views/Home";
import PostView from "./views/Post";

// text.match(/!\[.*?\]\((.*?)\)/)[1] = first image
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomeView />} />
        <Route path="/about/" element={<AboutView />} />
        <Route path="/blog/" element={<PostView />} />
      </Switch>
    </Router>
  );
}

export default App;
