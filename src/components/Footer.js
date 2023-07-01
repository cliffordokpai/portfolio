import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  height: 5vh;
  bottom: 0;
  width: 100%;
  background-color: rgb(78, 80, 80);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterItems = styled.button`
  @media screen and (max-width: 333px) {
    width: 100px;

    i {
      display: none;
    }
  }
`;

export default function Footer() {
  const email = {
    backgroundColor: '#7934f7',
    color: '#ffffff',
  };

  return (
    <FooterWrapper>
      <div>
        <Link target='_blank' to='//ca.linkedin.com/in/cliffordokpai'>
          <FooterItems className='ui linkedin button'>
            <i className='linkedin icon'></i>
            LinkedIn
          </FooterItems>
        </Link>
        <Link target='_blank' to='//github.com/C-N-O'>
          <FooterItems className='ui github button'>
            <i className='github icon'></i>
            Git Hub
          </FooterItems>
        </Link>
        <a href='mailto:cliffordokpai@yahoo.ca'>
          <FooterItems style={email} className='ui email button'>
            <i className='envelope outline icon'></i>
            Email
          </FooterItems>
        </a>
      </div>
    </FooterWrapper>
  );
}
