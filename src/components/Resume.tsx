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
          <div className="line" style={{ height: '600px' }} />
        </LineContainer>
      </div>
      <div className="copy" style={{ border: '1px solid green' }}>
        <h1>Resume</h1>
        <ResumeSection {...workExp}>Resume Section</ResumeSection>
      </div>
    </Container>
  );
};

const workExp = {
  title: 'This is the title',
  dates: {
    date1: 'Jan 01',
    date2: '03',
  },
};

const LineContainer = styled.div`
  position: absolute;
  left: 180px;
  top: -230px;
  transform: translateX(-50%);

  * {
    margin: 0 auto;
  }

  .line {
    width: 4px;
    position: relative;
    height: 230px; /* 230 gets to resume top */
    background: linear-gradient(
      to top,
      transparent,
      10%,
      #00eeff,
      80%,
      transparent
    );
    filter: var(--blue-line-filter);
  }

  .paper-clip {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    padding: 3px;
    filter: var(--blue-radial-filter);
    color: white;
  }
`;

export default Resume;
