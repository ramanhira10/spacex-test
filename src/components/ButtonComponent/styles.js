import styled from 'styled-components';

export const Button = styled.button`
  margin: 10px;
  width: 35vw;
  background: #32CD32;
  color: #000000;
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  display: inline-block;

  &:hover {
    font-weight: bold;
    color: #222222;
    background: #228B22;
  }

  /* large tablet & laptop styles */
  @media screen and (min-width: 700px) {
    width: 10vw;
  }
`;