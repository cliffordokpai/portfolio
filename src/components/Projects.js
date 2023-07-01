import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  /* height: 120vh; */
  overflow-y: scroll;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(5, 50%);
  height: 85vh;
`;

const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TransparentBackground = styled.div`
  background-color: transparent;
  display: grid;

  .button {
    background-color: seashell;
    &:hover {
      color: white;
      background-color: rgb(78, 80, 80);
    }
  }
`;

const ColoredBackground = styled.div`
  background-color: seashell;
  display: grid;

  .button {
    background-color: rgb(122, 176, 116);

    &:hover {
      color: white;
      background-color: rgb(78, 80, 80);
    }
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
`;

export default function Projects() {
  return (
    <Main>
      <Container>
        <ColoredBackground>
          <CenterItem>
            <Title>ARMAST</Title>
            <Link target='_blank' to='//cliffdev-armast.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>View Project</div>
                <div className='hidden content'>Click Now</div>
              </div>
            </Link>
            <Text>
              This is a hub for Java Script Arrays, Math, and String methods.
            </Text>
          </CenterItem>
        </ColoredBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>Cliff Blog</Title>

            <Link
              target='_blank'
              to='//ec2-15-223-46-226.ca-central-1.compute.amazonaws.com/'
            >
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>See Project</div>
                <div className='hidden content'>Explore</div>
              </div>
            </Link>
            <Text>
              A full stack Blog website with a React front-end, NodeJS and
              MongoDB back-end, and hosted on Amazon AWS.
            </Text>
          </CenterItem>
        </TransparentBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>Online Coffee Shop</Title>

            <Link target='_blank' to='//cliffdev-coffeeshop.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Click to Enter</div>
                <div className='hidden content'>Visit Store</div>
              </div>
            </Link>
            <Text>
              This is a online coffee store where customers can add to cart and
              reach checkout. This is still a work in progress.
            </Text>
          </CenterItem>
        </TransparentBackground>
        <ColoredBackground>
          <CenterItem>
            <Title>xChanger</Title>
            <Link target='_blank' to='//cliffdev-xChanger.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Take A Peek</div>
                <div className='hidden content'>Get In</div>
              </div>
            </Link>
            <Text>
              This is a currency converter App using a third-party API.
            </Text>
          </CenterItem>
        </ColoredBackground>
        <ColoredBackground>
          <CenterItem>
            <Title>Tip Calculator</Title>
            <Link target='_blank' to='//cliffdev-tipcalc.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Click Here</div>
                <div className='hidden content'>Explore App</div>
              </div>
            </Link>
            <Text>
              Tip Calculator is used for calculating an order total given the
              initial amount and a tip.
            </Text>
          </CenterItem>
        </ColoredBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>sQuiz App</Title>
            <Link target='_blank' to='//cliffdev-quizapp.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>You Think you are smart?</div>
                <div className='hidden content'>Take A Quiz</div>
              </div>
            </Link>
            <Text>
              This is a online quiz App built with HTML, CSS, Vanilla Javascript
            </Text>
          </CenterItem>
        </TransparentBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>Quotes App</Title>
            <Link target='_blank' to='//cliffdev-quotes-app.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>
                  Want to relax and read some quotes?
                </div>
                <div className='hidden content'>Check this out</div>
              </div>
            </Link>
            <Text>
              This is React App which plays quotes as a slide show. It uses
              axios to fetch quotes from a thrid party API, Redux to manage
              state, IdleTimer to monitor activity.
            </Text>
          </CenterItem>
        </TransparentBackground>
        <ColoredBackground>
          <CenterItem>
            <Title>Counter App</Title>
            <Link target='_blank' to='//cliffdev-counterapp.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Want to explore this App?</div>
                <div className='hidden content'>Just Do It</div>
              </div>
            </Link>
            <Text>
              Counter App allows you to select a plain .txt file or you can
              simply copy and paste. It then tells you the number of words and
              paragraphs contained in the file/text.
            </Text>
          </CenterItem>
        </ColoredBackground>

        <ColoredBackground>
          <CenterItem>
            <Title>Disney Plus Clone</Title>
            <Link target='_blank' to='//cliffdev-disney-plus-clone.web.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Are you a Star Wars fan?</div>
                <div className='hidden content'>See Disney Plus Clone</div>
              </div>
            </Link>
            <Text>
              This is a Disney Plus Clone. Tech stack includes React, Redux,
              Styled Components, Firebase Auth and Hosting, React Slick for
              Sliders, and React Router Dom.
            </Text>
          </CenterItem>
        </ColoredBackground>
      </Container>
    </Main>
  );
}
