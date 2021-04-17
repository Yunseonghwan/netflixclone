import { Link } from "react-router-dom";
import styled from "styled-components";
import { apiImage } from "../../../stores/Api/Api";

const THDB_KEY = "43d1cb232767ef5c553e1bce9ae70ba2";

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
export default ({ nowMovie }) => {
  console.log("sadas", nowMovie);
  return (
    <Container>
      {nowMovie.map((item) => (
        <img
          src={apiImage(item.backdrop_path)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "white",
          }}
        />
      ))}
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
};
