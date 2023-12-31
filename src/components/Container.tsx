import React from 'react';
import { styled } from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  id: string;
}

const Container: React.FC<ContainerProps> = ({ children, id }) => {
  return <Cont id={id}>{children}</Cont>;
};

const Cont = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.scaffold {
    border: 1px solid white;
  }

  .copy {
    width: 55%;
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

  .branch {
    width: 45%;
    height: 100%;
  }
`;

export default Container;
