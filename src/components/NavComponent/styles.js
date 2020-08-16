import styled from 'styled-components';

export const Heading1 = styled.h1`
  grid-row: 1;

  @media screen and (min-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;