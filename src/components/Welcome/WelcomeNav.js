import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(31, 35, 41);
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li a {
    color: white;
  }
`;

export default () => {
  return (
    <Nav>
      <li>
        <a
          href="https://github.com/Yunseonghwan?tab=repositories"
          target="blank"
        >
          PORTFOLIO
        </a>
      </li>
      <li>
        <a href="https://sunghwan0208.blogspot.com/" target="blank">
          BLOG
        </a>
      </li>
      <li>
        <Link>CONTACT</Link>
      </li>
    </Nav>
  );
};
