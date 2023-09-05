import React from 'react';
import { styled } from 'styled-components';

interface ResumeSecProps {
  children: React.ReactNode;
  title: string;
  dates: {
    date1: string;
    date2: string;
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
        <span>{dates.date1} - </span>
        <span>{dates.date2}</span>
      </div>
      <div className="right">
        <h2>{title}</h2>
        <p className="inner">{children}</p>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: row;

  .right {
    h2,
    p {
      margin: 0;
    }
  }
`;

export default ResumeSection;
