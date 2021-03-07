import styled from "styled-components";

import Home from "../../../components/Welcome/Home";
import WelcomeNav from "../../../components/Welcome/WelcomeNav";
import Challenge from "../../../assets/images/Challenge.png";
import Conversion from "../../../assets/images/conversion.png";
import Graphe from "../../../assets/images/graphe.png";
import Improvement from "../../../assets/images/improvement.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const AboutTitle = styled.div`
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  height: 18rem;
  align-items: center;
  background-color: #999;
  @media (max-width: 850px) {
    height: 35rem;
  }
`;
const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Explanation = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 850px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export default () => (
  <Container>
    <Home />
    <WelcomeNav />
    <div>
      <AboutTitle>
        <h1
          style={{ color: "#e50914", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          ABOUT
        </h1>
      </AboutTitle>
      <IconContainer>
        <Explanation>
          <li>
            <img src={`${Graphe}`} style={{ width: "10rem" }} />
            <ExplanationContainer>
              <SubTitle>발전</SubTitle>
              <div>
                <span>자기 발전이</span>
              </div>
              <div>
                <span>팀과 회사의 발전</span>
              </div>
            </ExplanationContainer>
          </li>
          <li>
            <img src={`${Challenge}`} style={{ width: "10rem" }} />
            <ExplanationContainer>
              <SubTitle>도전</SubTitle>
              <div>
                <span>깊은 생각보다</span>
              </div>
              <div>
                <span>빠른 실천!</span>
              </div>
            </ExplanationContainer>
          </li>
        </Explanation>
        <Explanation>
          <li>
            <img src={`${Conversion}`} style={{ width: "10rem" }} />
            <ExplanationContainer>
              <SubTitle>대화</SubTitle>
              <div>
                <span>동료와의 소통!</span>
              </div>
            </ExplanationContainer>
          </li>
          <li>
            <img src={`${Improvement}`} style={{ width: "10rem" }} />
            <ExplanationContainer>
              <SubTitle>개선</SubTitle>
              <span>더욱 효율적으로 개선</span>
            </ExplanationContainer>
          </li>
        </Explanation>
      </IconContainer>
    </div>
  </Container>
);
