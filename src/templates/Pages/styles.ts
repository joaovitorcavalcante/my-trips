import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: auto;

  max-width: var(--container);
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;

export const Body = styled.div`
  p {
    font-size: var(--medium);
  }
`;
