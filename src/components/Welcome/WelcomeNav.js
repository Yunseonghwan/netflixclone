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

export default () => (
  <Nav>
    <li>
      <Link to="/home">HOME</Link>
    </li>
    <li>
      <Link>ABOUT</Link>
    </li>
    <li>
      <Link>PORTFOLIO</Link>
    </li>
    <li>
      <Link>BLOG</Link>
    </li>
    <li>
      <Link>CONTACT</Link>
    </li>
  </Nav>
);
