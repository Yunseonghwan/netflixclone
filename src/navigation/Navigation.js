import { useRecoilState } from "recoil";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedinState } from "../stores/loginState";
import Welcome from "../pages/Auth/Welcome";
import Home from "../components/Welcome/Home";

const Navigation = () => {
  const [isLoggedin, setIsLoggedIn] = useRecoilState(isLoggedinState);
  return (
    <Router>
      <Switch>
        {isLoggedin ? null : (
          <>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Navigation;
