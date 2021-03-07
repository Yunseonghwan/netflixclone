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
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link>ABOUT</Link>
      </li>
      <li>
        <a
          href="https://github.com/Yunseonghwan?tab=repositories"
          target="blank"
        >
          PORTFOLIO
        </a>
      </li>
      <li>
        <a
          href="https://www.blogger.com/blog/posts/3328672408708138314?bpli=1&pli=1"
          target="blank"
        >
          BLOG
        </a>
      </li>
      <li>
        <Link>CONTACT</Link>
      </li>
    </Nav>
  );
};
