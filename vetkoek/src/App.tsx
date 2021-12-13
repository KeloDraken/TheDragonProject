import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import HomeView from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomeView />} />
      </Switch>
    </Router>
  );
}

export default App;
