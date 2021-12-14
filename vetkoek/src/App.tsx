import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./styles/kelodraken.css"

import HomeView from "./views/Home";
import SearchView from "./views/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomeView />} />
        <Route path="/search" element={<SearchView />} />
      </Switch>
    </Router>
  );
}

export default App;
