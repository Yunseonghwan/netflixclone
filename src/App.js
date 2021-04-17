import { RecoilRoot } from "recoil";
import Navigation from "./navigation/Navigation";
import "./init.css";
import "./styles.css";
import React from "react";

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={null}>
        <Navigation />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
