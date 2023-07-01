import React from 'react';
import styled, { keyframes } from 'styled-components';

const H1zoomOut = keyframes`
0%{
  font-size: 0rem;
}
100%{
  font-size: 5rem;
}
`;

const H3zoomOut = keyframes`
0%{
  font-size: 0rem;
}
100%{
  font-size: 3rem;

}
`;

const Main = styled.div`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  height: 90vh;
`;

const H1 = styled.h1`
  color: rgb(52, 109, 172);
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  animation: 3s ${H1zoomOut} ease-in;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 4rem;
    animation: none;
  }
  @media screen and (max-width: 375px) {
    font-size: 3rem;
    animation: none;
  }
`;

const H3 = styled.h3`
  color: rgb(78, 80, 80);
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  animation: 3s ${H3zoomOut} ease-in;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 3rem;
    animation: none;
  }
  @media screen and (max-width: 375px) {
    font-size: 2rem;
    animation: none;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Main>
      <Wrapper>
        <div>
          <H1>Hello, and welcome!</H1>
          <H3>My name is</H3>
          <H1>Clifford Okpai</H1>
          <H3>and I am a</H3>
          <H1>Front-End Web Developer</H1>
        </div>
      </Wrapper>
    </Main>
  );
}

export default Home;
