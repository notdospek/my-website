import React from 'react';
import Container from './Container';
import ResumeSection from './ResumeSection';
import { styled } from 'styled-components';
import { FiPaperclip } from 'react-icons/fi';

const Resume = () => {
  return (
    <Container id="resume">
      <div style={{ position: 'relative' }}>
        <LineContainer>
          <div className="line" />
          <FiPaperclip className="paper-clip" />
        </LineContainer>
      </div>
      <div className="copy" style={{ border: '1px solid green' }}>
        <h1>Resume</h1>
        <ResumeSection>Resume Section</ResumeSection>
      </div>
    </Container>
  );
};

const LineContainer = styled.div`
  position: absolute;
  left: 180px;
  top: -220px;
  transform: translateX(-50%);

  * {
    margin: 0 auto;
  }

  .line {
    width: 4px;
    position: relative;
    height: 280px; /* 220 gets to resume top, extra 60 added */
    background: linear-gradient(
      to top,
      #e4fdff,
      5%,
      yellow,
      40%,
      #00eeff,
      80%,
      transparent
    );
    /* filter: drop-shadow(0 0 0.2rem cyan) drop-shadow(0 0 0.2rem cyan)
      drop-shadow(0 0 1rem #1100ffcb) drop-shadow(0 0 0.4rem #1100ff)
      drop-shadow(0 0 2rem #1100ff90); */

    &::after {
      content: '';
      position: absolute;
      inset: -0.625em;
      left: 6px;
      transform: translateX(-50%);
      background: linear-gradient(
        to top,
        white,
        5%,
        yellow,
        40%,
        cyan,
        80%,
        transparent
      );
      filter: blur(0.3rem);
      opacity: 0.8;
      width: 6px;
      border-radius: 5px;
      z-index: -1;
    }
  }

  .paper-clip {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    padding: 3px;
    filter: drop-shadow(0 0 0.2rem cyan) drop-shadow(0 0 0.5rem cyan)
      drop-shadow(0 0 1rem cyan) drop-shadow(0 0 1.5rem #1100ffb7);
    color: white;
  }
`;

export default Resume;
