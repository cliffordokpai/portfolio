import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 2rem;
  text-align: center;
  padding: 0 30px;

  @media screen and (max-width: 1571px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1224px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 1074px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 933px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 933px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 742px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 627px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 533px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 448px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 379px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

function About() {
  return (
    <Main>
      <Container>
        <Text>
          Hi, my name is Clifford Okpai and I am a front-end web developer.
          <br />
          <br /> When I was a teen, I wasn't quite sure what career path to
          choose as I thought of becoming an Engineer, a doctor, a pilot, a
          geologist. When I was in high school, Engineering was on top of that
          list and I was fond decoupling my transistor radios and handheld
          games, just out of curiosity, to see what's inside that make them
          work. As you can imagine, it didn't always end well for young
          Clifford, as he may not be able to recouple the parts. <br />
          <br />
          Prior to the year that I would gain admission into the University of
          Manitoba, I did a 1 year advanced level program where I did Geography
          as major. At this point, I still was not sure where I was headed. In
          my first term at the University of Manitoba, I had the choice of
          taking a few course as electives and I decided to try the
          "Introductory Computer Science" course. I was blown away by what I
          learned in that course and amazed at the things I was able to build by
          just coding. Software development became my new passion and I never
          looked back.
        </Text>
      </Container>
    </Main>
  );
}

export default About;
