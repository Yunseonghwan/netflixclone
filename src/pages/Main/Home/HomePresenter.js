import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
`;

const Title = styled.span`
  color: #e50914;
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 2rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const NavContainer1 = styled.ul`
  display: flex;
  align-items: center;
  height: 5rem;
`;

const Nav = styled.li`
  padding-right: 1rem;
  a {
    color: white;
  }
`;
export default () => (
  <Container>
    <div>
      <div>
        <NavContainer1>
          <Nav>
            <Title>HWANFLIX</Title>
          </Nav>
          <Nav>
            <Link>홈</Link>
          </Nav>
          <Nav>
            <Link>TV프로그램</Link>
          </Nav>
          <Nav>
            <Link>영화</Link>
          </Nav>
          <Nav>
            <Link>NEW! 콘텐츠</Link>
          </Nav>
          <Nav>
            <Link>내가 찜한 콘텐츠</Link>
          </Nav>
        </NavContainer1>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </Container>
);
