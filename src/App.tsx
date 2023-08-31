import { styled } from 'styled-components';
import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <div
        style={{
          paddingBottom: '20px',
          marginBottom: '260px',
        }}
      >
        <Header />
        <Container>
          <Bio />
        </Container>
      </div>
      <Container>
        <Resume />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default App;
