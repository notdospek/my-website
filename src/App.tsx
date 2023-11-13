import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Case>
      <Top>
        <div />
      </Top>
      <Interface>
        <ScreenTrim>
          <Screen></Screen>
        </ScreenTrim>
        <ConsoleName>
          Alex<span>Sarson</span>
        </ConsoleName>
        <div className="controls"></div>
      </Interface>
    </Case>
  );
}

const Case = styled.div`
  background-color: var(--case-primary-colour);
  width: 100vw;
  height: 100%;
`;

const Top = styled.div`
  height: 2rem;
  border-bottom: var(--case-indent-colour) solid 3px;
  display: flex;
  padding: 0 0.5rem;

  div {
    border-right: var(--case-indent-colour) solid 3px;
    border-left: var(--case-indent-colour) solid 3px;
    width: 100%;
  }
`;

const Interface = styled.div`
  padding: 1rem 0.5rem;
  height: 100%;

  .controls {
    border: solid 1px black;
  }
`;

const ScreenTrim = styled.div`
  background-color: var(--case-secondary-colour);
  height: 200px;
  padding: 1rem 3rem 2rem 3rem;
  border-radius: 10px;
  border-bottom-right-radius: 40px;
`;

const Screen = styled.div`
  background-color: var(--screen-colour);
  width: 100%;
  height: 100%;
`;

const ConsoleName = styled.p`
  color: var(--case-text-colour);

  span {
    text-transform: uppercase;
  }
`;

export default App;
