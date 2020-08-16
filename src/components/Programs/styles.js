import styled from 'styled-components';

export const StyledProgramComponent = styled.div`
  
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
  }

  /* desktop styles */
  @media screen and (min-width: 1024px) {

    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
  }
`;


export const EmptyData = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;