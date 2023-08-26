import React from "react";
import Container from "./Container";
import ResumeSection from "./ResumeSection";

const Resume = () => {
  return (
    <Container id='resume'>
      <div className="branch"></div>
      <div className="copy" style={{ border: '1px solid green' }}>
        <h1>Resume</h1>
        <ResumeSection>Resume Section</ResumeSection>
      </div>
    </Container>
  )
}

export default Resume;