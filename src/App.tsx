import { styled } from 'styled-components';
import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Bio />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default App;
