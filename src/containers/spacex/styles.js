import styled from 'styled-components';

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const SpaceXProgramsContainer = styled.div`
  display: grid;
  padding: 10px;
  background-color: #D3D3DF;

  @media screen and (min-width: 700px) {
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }

  /* beyond 1440px */
  @media screen and (min-width: 1440px) {

    max-width: 1440px;
    margin: 0 auto;
  }
`;