import { RecoilRoot } from "recoil";
import Navigation from "./navigation/Navigation";
import "./init.css";
import "./styles.css";

function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
