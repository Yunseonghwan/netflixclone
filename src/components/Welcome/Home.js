import { Link } from "react-router-dom";
import styled from "styled-components";

import hwan from "../../assets/images/hwan.jpg";

const Welcome = styled.div`
padding: 0 3.5rem;
  height: 52rem;
  @media (max-width: 900px) {
    height: 60rem;
  }
  ul {
    height: 5rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li{
      &:nth-child(2) {
        width: 5rem;
        height: 2.2rem;
        background-color: #e50914;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px
      }
    }
      li a {
        color: white;
      }
    }
  }
`;

const Title = styled.span`
  color: #e50914;
  font-size: 2.5rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const IntroductionContainer = styled.div`
  height: 47rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    height: 55rem;
  }
  div {
    padding-bottom: 0.5rem;
  }
  span {
    color: white;
    font-size: 1.25rem;
    @media (max-width: 980px) {
      font-size: 1rem;
    }
  }
`;

const MyImage = styled.div`
  width: 15rem;
  height: 18rem;
  background-color: white;
  background-image: url(${hwan});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 980px) {
    width: 10rem;
    height: 13rem;
    background-color: white;
    background-image: url(${hwan});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const MyIntroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  @media (max-width: 980px) {
    font-size: 1.8rem;
  }
`;

export default () => {
  return (
    <Welcome>
      <ul>
        <li>
          <Title>HWANFLIX</Title>
        </li>
        <li>
          <Link to="/movie">Go!</Link>
        </li>
      </ul>
      <IntroductionContainer>
        <div>
          <MyImage></MyImage>
        </div>
        <div style={{ paddingBottom: "2rem" }}>
          <MyIntroTitle>
            안녕하세요. 항상 생각하고 실천하는 웹, 앱 개발자 윤성환이라고합니다.
          </MyIntroTitle>
        </div>
        <div>
          <span>
            저는 군대에있을때 책을 읽다 프로그래밍 책을 우연히 접하게 되었는데
          </span>
        </div>
        <div>
          <span>그때 부터 흥미가 생겨서 웹 프론트로 개발을 시작하였고 </span>
        </div>
        <div>
          <span>
            깊이있게 공부하고싶어서 사이버 대학교를 들어가서 프로그래밍
            전공진행중입니다.
          </span>
        </div>
        <div>
          <span>저는 현재 React로 프론트개발중인 웹 앱 개발자 이고.</span>
        </div>
        <div>
          <span>
            저는 react로 웹 프론트 개발을하고 React-Native로 크로스플랫폼 앱개발
            진행한 경력도있습니다.
          </span>
        </div>
        <div>
          <span>
            새로운 기술을 배우는 것에 큰 흥미를 가지고있고 이번에 작성한
            웹페이지도 상태관리 라이브러리 recoil을 도입해서 만들었습니다.
          </span>
        </div>
        <div>
          <span>
            그리고 저는 개발할때 소통하고 기술에 대한 얘기, 이슈를 찾아보거나
            신기술에대한 문서 보는거를 좋아합니다.
          </span>
        </div>
        <div>
          <span>
            저는 개발은 무한한 가능성이있다고 생각합니다. 그래서 저의 목표는
            선배 개발자들 처럼 많은 지식과 경험을 쌓고 거기서 더 발전해 나가며
            후배 개발자들에게 도움이 되는것입니다.
          </span>
        </div>
        <div>
          <span>
            이 사이트는 저의 소개 사이트겸 넷플릭스 클론 코딩한
            포트폴리오입니다.
          </span>
        </div>
        <div>
          <span>
            먼저 첫페이지는 제 소개 페이지입니다. 보시고 로그인버튼을 누르시면
            제 포트폴리오를 보실 수 있습니다.
          </span>
        </div>
        <div>
          <span>감사합니다.</span>
        </div>
      </IntroductionContainer>
    </Welcome>
  );
};
