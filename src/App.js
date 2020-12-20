import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import TravelBoard from "./pages/TravelBoard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/searchpage" exact component={SearchPage} />
        <Route path="/mytravelboard" exact component={TravelBoard} />
      </Switch>
    </Router>
  );
};

export default App;
