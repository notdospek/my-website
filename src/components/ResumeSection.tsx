import React from "react";
import { styled } from "styled-components";

interface ResumeSecProps {
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSecProps> = ({ children }) => {
  return (
    <Section>
      <div className="left"><span>date 1 - </span><span>date 2</span></div>
      <div className="right">
        <h2>Title</h2>
        <p className="inner">{children}</p>
      </div>
    </Section>
  )
};

const Section = styled.div`
  display: flex;
  flex-direction: row;

  .right {
    h2, p {
      margin: 0;
    }
  }
`;

export default ResumeSection;