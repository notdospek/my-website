import { styled } from 'styled-components';
import me from '../images/me.png';

const Bio = () => {
  return (
    <Container className="flex">
      <Triangle />
      <GraphicsContainer className="flex">
        {/* <div className="tri-side a" /> */}
        <img src={me} alt="Picture of me" />
        {/* <div className="tri-side b" />
        <div className="tri-side c" /> */}
      </GraphicsContainer>
      <div className="flex copy">
        <h1>Hello</h1>
        <h2>A bit about me</h2>
        <p>
          Here I will write some things about me and how I am a self taught web
          developer.
        </p>
      </div>
    </Container>
  );
};

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-right: 40px solid transparent;
  border-bottom: 100px solid #f09;
  border-left: 150px solid transparent;
`;

const Container = styled.div`
  width: 100%;
  border: 1px solid white;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;

  .copy {
    width: 50%;
    flex-direction: column;
    text-align: left;

    * {
      margin-bottom: 0;
    }

    h1 {
      margin: 0;
    }

    p {
      margin-top: 0.5rem;
    }
  }
`;

const GraphicsContainer = styled.div`
  width: 50%;
  position: relative;

  img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    padding: 6rem;
  }

  .tri-side {
    position: absolute;
    border-bottom: 3px solid white;
    transform-origin: left;
    top: 2rem;

    &.a {
      width: 30rem;
      transform: rotate(60deg);
    }

    &.b {
      width: 22rem;
      transform: rotate(10deg);
    }

    &.c {
      transform-origin: right;
      width: 23.4rem;
      top: 5.66rem;
      right: 6.8rem;
      transform: rotate(286.5deg);
    }
  }
`;

export default Bio;
