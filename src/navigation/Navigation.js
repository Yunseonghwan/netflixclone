import { useRecoilState } from "recoil";

import { BrowserRouter, Route } from "react-router-dom";
import { isLoggedinState } from "../stores/loginState";
import Welcome from "../pages/Auth/Welcome";

const Navigation = () => {
  const [isLoggedin, setIsLoggedIn] = useRecoilState(isLoggedinState);
  return (
    <BrowserRouter>
      {isLoggedin ? null : (
        <Route exact path="/">
          <Welcome />
        </Route>
      )}
    </BrowserRouter>
  );
};

export default Navigation;
