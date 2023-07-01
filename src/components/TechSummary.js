import React from 'react';

import styled from 'styled-components';

const Body = styled.body`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  height: 85vh;
`;

const CenterItem = styled.div`
  margin-top: 5%;
`;

const TextBar = styled.h2`
  width: 100%;
  text-align: center;
`;

function TechSummary() {
  return (
    <Body>
      <CenterItem>
        <div className='ui container'>
          <TextBar>
            Percentages are a reflection of my confidence level when working
            with these technologies.
          </TextBar>

          <div className='ui teal active progress'>
            <div className='bar' style={{ width: '86%' }}>
              <div className='progress'>86%</div>
            </div>
            <div className='label'>HTML</div>
          </div>
          <div className='ui black active progress'>
            <div
              className='bar'
              style={{
                width: '89%',
                color: 'white',
              }}
            >
              <div className='progress'>89%</div>
            </div>
            <div className='label'>CSS</div>
          </div>
          <div className='ui purple active progress'>
            <div className='bar' style={{ width: '80%', color: 'white' }}>
              <div className='progress'>80%</div>
            </div>
            <div className='label'>JavaScript</div>
          </div>
          <div className='ui brown active progress'>
            <div className='bar' style={{ width: '78%', color: 'white' }}>
              <div className='progress'>78%</div>
            </div>
            <div className='label'>React JS</div>
          </div>
          <div className='ui pink  active progress'>
            <div className='bar' style={{ width: '50%' }}>
              <div className='progress'>50%</div>
            </div>
            <div className='label'>Node JS</div>
          </div>
          <div className='ui orange active progress'>
            <div className='bar' style={{ width: '65%' }}>
              <div className='progress'>65%</div>
            </div>
            <div className='label'>Redux</div>
          </div>
          <div className='ui blue active progress'>
            <div className='bar' style={{ width: '55%' }}>
              <div className='progress'>55%</div>
            </div>
            <div className='label'>TypeScript</div>
          </div>
          <div className='ui  active violet progress'>
            <div className='bar' style={{ width: '20%' }}>
              <div className='progress'>20%</div>
            </div>
            <div className='label'>GO</div>
          </div>

          <div className='ui grey active progress'>
            <div className='bar' style={{ width: '60%' }}>
              <div className='progress'>60%</div>
            </div>
            <div className='label'>Java</div>
          </div>
          <div className='ui olive  active progress'>
            <div className='bar' style={{ width: '80%' }}>
              <div className='progress'>80%</div>
            </div>
            <div className='label'>SASS</div>
          </div>
          <div className='ui green active progress'>
            <div className='bar' style={{ width: '50%' }}>
              <div className='progress'>50%</div>
            </div>
            <div className='label'>MongoDB</div>
          </div>
        </div>
      </CenterItem>
    </Body>
  );
}

export default TechSummary;
