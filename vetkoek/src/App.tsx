import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./styles/kelodraken.css";

import AboutView from "./views/About";
import HomeView from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Switch>
    </Router>
  );
}

export default App;
