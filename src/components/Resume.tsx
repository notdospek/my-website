import Container from './Container';
import ResumeSection from './ResumeSection';
import { styled } from 'styled-components';
import { FiPaperclip } from 'react-icons/fi';

const Resume = () => {
  return (
    <Container id="resume">
      <div style={{ position: 'relative' }}>
        <LineContainer>
          <div className="line first" />
          <FiPaperclip className="paper-clip" />
          <div className="line 2" style={{ height: '600px' }} />
        </LineContainer>
      </div>
      <div className="copy">
        <h1>Resume</h1>

        <ResumeSection {...mmpWeb}>
          <p>
            Recently I was promoted to Web Developer. While this hasn't greatly
            changed my day to day role, I have taken on projects such as
            providing a GUI for analytical data in Metabase hosted on AWS
            Elastic Beanstalk, and changing our workflow to encorporate
            Dockerised local environments and deployments now that our sites are
            hosted on AWS ECS.
          </p>
        </ResumeSection>

        <ResumeSection {...mmpJun}>
          <p>
            In my current role, I implement new features across front-end and
            CMS systems on a twice weekly release schedule. I also independently
            fix bugs and issues across 6 journals and 6 iw websites.
          </p>
        </ResumeSection>

        <ResumeSection {...leadMan}>
          <p>
            During my time at L.E.A.D. I was the sole developer producing custom
            code for 20+ school websites. It was through this work that I taught
            myself HTML, CSS, PHP and JavaScript.
          </p>
          <p>
            Working as on site Tech Support and the company's Web Developer at
            the same time in an agile environment allowed me to develop great
            time keeping and communication skills.
          </p>
        </ResumeSection>

        <ResumeSection {...further}>{/* blank */}</ResumeSection>
      </div>
    </Container>
  );
};

const mmpWeb = {
  title: 'Magdalen Medical Publishing - Web Developer',
  dates: {
    start: 'Aug 2023',
    end: 'Present',
  },
};

const mmpJun = {
  title: 'Magdalen Medical Publishing - Junior Web Developer',
  dates: {
    start: 'June 2022',
    end: 'Aug 2023',
  },
};

const leadMan = {
  title: 'L.E.A.D. IT Services - IT Technician & Web Development Manager',
  dates: {
    start: 'Aug 2019',
    end: 'June 2022',
  },
};

const further = {
  title: 'For a full CV get in touch below.',
  dates: {
    start: '',
    end: '',
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

    &.first {
      background: linear-gradient(
        to top,
        transparent,
        20%,
        #00eeff,
        70%,
        transparent
      );
    }
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
