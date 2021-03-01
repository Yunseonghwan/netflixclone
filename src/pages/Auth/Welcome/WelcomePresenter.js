import styled from "styled-components";

import Home from "../../../components/Welcome/Home";
import WelcomeNav from "../../../components/Welcome/WelcomeNav";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export default () => (
  <Container>
    <Home />
    <WelcomeNav />
  </Container>
);
