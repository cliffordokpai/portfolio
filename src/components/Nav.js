import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const NavBar = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(78, 80, 80);
`;

const NavItem = styled.h2`
  animation: 5s ${fadeIn} ease-in;
  color: white;

  &:hover {
    padding-top: 10px;
    color: #64ac76;
  }

  @media screen and (max-width: 414px) {
    font-size: 16px;
  }
`;

function Nav() {
  return (
    <NavBar>
      <Link to='/'>
        <NavItem>
          <i className='home icon'></i>
        </NavItem>
      </Link>

      <Link to='/about'>
        <NavItem>About</NavItem>
      </Link>

      <Link to='/projects'>
        <NavItem>Projects</NavItem>
      </Link>
      <Link to='/tech-summary'>
        <NavItem>Tech-Summary</NavItem>
      </Link>
    </NavBar>
  );
}

export default Nav;
