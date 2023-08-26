import { styled } from 'styled-components';
import me from '../images/me.png';

const Bio = () => {
  return (
    <Container className="flex">
      <GraphicsContainer className="flex">
        <svg className="line">
          <polygon className="line" points="40,5 180,450" />
        </svg>
        <img src={me} alt="Picture of me" />
        <svg>
          <polygon className="triangle" points="40,5 380,140 180,450" />
        </svg>
      </GraphicsContainer>
      <div className="flex copy">
        <h1>Hello</h1>
        <p style={{ fontSize: '1.7rem' }}>
          I'm Alex Sarson, a self taught web developer based in London, UK. I
          love learning new things, solving problems and creating beautiful
          websites!
        </p>
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

  .copy {
    width: 50%;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    * {
      margin-bottom: 0;
    }

    h1 {
      margin: 0;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

const GraphicsContainer = styled.div`
  width: 50%;
  position: relative;

  svg {
    width: 100%;
    height: 430px;
    position: absolute;
    overflow: visible;

    &.line {
      z-index: 3;
    }

    polygon {
      fill: transparent;
      stroke-width: 3;
      stroke: #00eeff;
      filter: drop-shadow(0 0 0.2rem cyan) drop-shadow(0 0 0.2rem cyan)
        drop-shadow(0 0 1rem #1100ffcb) drop-shadow(0 0 0.4rem #1100ff)
        drop-shadow(0 0 2rem #1100ff90);
    }
  }

  img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    padding: 6rem;
    z-index: 2;
  }
`;

export default Bio;
