import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NowSwiper from "../../../components/main/Home/NowSwiper";

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

const CardContainer = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
  const [card, setCard] = useState(nowMovie);
  const [movieIndex, setMovieIndex] = useState(nowMovie.length);

  const next = () => {
    const nextIndex = movieIndex + 1;
    if (movieIndex === 20) {
      setMovieIndex(20);
    } else {
      setMovieIndex(nextIndex);
      console.log(movieIndex);
    }
  };

  const prev = () => {
    const nextIndex = movieIndex - 1;
    if (movieIndex === 0) {
      setMovieIndex(0);
    } else {
      setMovieIndex(nextIndex);
      console.log(movieIndex);
    }
  };

  useEffect(() => {
    console.log(movieIndex);
  }, []);

  return (
    <Container>
      <CardContainer>
        {nowMovie.map((item, index) => (
          <NowSwiper id={item.id} image={item.backdrop_path} />
        ))}
      </CardContainer>
      <div style={{ paddingTop: 500 }}>
        <button onClick={prev} disabled={movieIndex === 0}>
          Prev
        </button>
        <button onClick={next} disabled={movieIndex === card.length - 1}>
          Next
        </button>
      </div>
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
