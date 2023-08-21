import { styled } from 'styled-components';
import me from '../images/me.png';

const Bio = () => {
  return (
    <Container className="flex">
      <div className="flex image">
        <GraphicsContainer>
          <img src={me} alt="Picture of me" />
        </GraphicsContainer>
      </div>
      <div className="flex copy">
        <h1>About Me</h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid white;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
`;

const GraphicsContainer = styled.div`
  img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
  }
`;

export default Bio;
