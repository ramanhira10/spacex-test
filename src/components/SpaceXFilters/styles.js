import styled from 'styled-components';

export const SpaceXFiltersComponent = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 10px;

  @media screen and (min-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 2;
    width: 35vw;
  }

  /* desktop styles */
  @media screen and (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    width: 25vw;
  }
`;

export const FilterHeading = styled.h3`
  text-align: center;
`;
export const LaunchYears = styled.div`
  text-align: center;
`;
export const LaunchSuccess = styled.div`
  text-align: center;
`;
