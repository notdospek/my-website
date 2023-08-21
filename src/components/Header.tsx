import styled from 'styled-components';

const Header = () => {
  const iconBars = [1, 2, 3, 4];
  return (
    <Container>
      <div className="left flex">
        <Icon className="flex">
          {iconBars.map((i) => (
            <IconBar key={i} />
          ))}
        </Icon>
        <div className="titles">
          <span>Alex</span>
          <span>Sarson</span>
        </div>
      </div>
      <div className="right flex">Resume | Projects | Contact</div>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 2px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left {
    flex-direction: row;

    .titles {
      display: flex;
      flex-direction: row;
      text-align: left;
      align-items: center;

      span {
        font-size: min(6vw, 3rem);
        margin-left: min(1.5vw, 1rem);
        font-family: 'Bebas Neue', serif;
      }
    }
  }

  .right {
    align-items: center;
  }
`;

const Icon = styled.div`
  width: min(8vw, 4rem);
  height: min(8vw, 4rem);
  border-radius: 50%;
  background: linear-gradient(to bottom, yellow, magenta);
  /* box-shadow: 0px 0px 16px orange, 0px 0px 20px red; */
  flex-direction: column;
  justify-content: flex-end;
  margin-right: min(1.5vw, 0.5rem);
`;

const IconBar = styled.div`
  width: 100%;
  height: min(0.5vw, 4px);
  margin-top: min(0.5vw, 4px);
  background-color: #171419;
`;

export default Header;
