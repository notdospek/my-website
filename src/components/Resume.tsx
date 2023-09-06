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
      <div className="copy">
        <h1>Resume</h1>
        <ResumeSection {...workExp}>
          <p>
            In my current role, I implement new features across front-end and
            CMS systems on a twice weekly release schedule. I also independently
            fix bugs and issues across 6 journals and 6 iw websites.
          </p>
          <p></p>
        </ResumeSection>

        <ResumeSection {...nextExp}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci, et eius necessitatibus odio dolore. Tenetur voluptates
            voluptatem iusto quas quam eum incidunt facere tempore molestias
            molestiae? Porro, at? Officiis?
          </p>
        </ResumeSection>
      </div>
    </Container>
  );
};

const workExp = {
  title: 'Magdalen Medical Publishing - Junior Web Developer',
  dates: {
    start: 'June 2022',
    end: 'Present',
  },
};

const nextExp = {
  title: 'This is the next section',
  dates: {
    start: 'June 2019',
    end: 'June 2022',
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
