import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
  body, a, p, ul, li, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }

  a, p, ul, li {
    
    text-decoration: none;
  }
`;
 
export default GlobalStyle;