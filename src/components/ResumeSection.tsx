import React from 'react';
import { styled } from 'styled-components';

interface ResumeSecProps {
  children: React.ReactNode;
  title: string;
  dates: {
    start: string;
    end: string;
  };
}

const ResumeSection: React.FC<ResumeSecProps> = ({
  children,
  dates,
  title,
}) => {
  return (
    <Section>
      <div className="left">
        <span>
          {dates.start} {dates.start == '' ? '' : '- '}
        </span>
        <span>{dates.end}</span>
      </div>
      <div className="right">
        <h2 style={{ lineHeight: '1.2' }}>{title}</h2>
        <p className="inner">{children}</p>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  position: relative;

  &:first-of-type {
    margin-top: 2rem;
  }

  .left {
    position: absolute;
    left: 0;
    transform: translateX(calc(-100% - 1.5rem));
    line-height: 2;

    span {
      color: var(--dull-text);
    }
  }

  .right {
    /* margin-left: 1.5rem; */

    h2,
    p {
      margin: 0;
    }

    p {
      margin-top: 0.5rem;
    }

    .inner {
      margin-top: 1rem;
    }
  }
`;

export default ResumeSection;
