import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Auth/Welcome";
import Home from "../pages/Main/Home";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/movie">
          <Home />
        </Route>
        <>
          <Route exact path="/">
            <Welcome />
          </Route>
        </>
      </Switch>
    </Router>
  );
};

export default Navigation;
