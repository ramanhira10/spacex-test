import styled from 'styled-components';

export const Program = styled.div`
  background-color: #FFFFFF;
  margin: 5px 0;
  padding: 5px 10px 10px 10px;
  border-radius: 5px;
  
  &:first-child {
    margin: 10px 0;
  }

  /* large tablet & laptop styles */
  @media screen and (min-width: 700px) {
    grid-column: span 2;
    width: 25vw;
    margin: 0;

    &:first-child {
      margin: 0;
    }
  }

  /* desktop styles */
  @media screen and (min-width: 1024px) {
    grid-column: auto;
    width: 15vw;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: 10px 0;

  /* large tablet & laptop styles */
  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const ImageElement = styled.img`
  @media screen and (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProgramDetails = styled.div``;

export const ProgramHeading = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const ProgramIDs = styled.ul`
  padding: 5px;
  margin: 0 5px;

  li {
    list-style-type: disc;
    margin-left: 50px;
    font-size: 14px;
    color: var(--black);
    font-weight: normal;
  }
`;

export const LaunchYear = styled.span`
  font-size: 14px;
  color: var(--black);
  font-weight: normal;
`;

export const LaunchSuccess = styled.span``;
