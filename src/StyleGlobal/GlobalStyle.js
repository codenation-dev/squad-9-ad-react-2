import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;  
  }
   
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
   
  html, body, #root{
    height: 100%
  }

  .page-link:focus {
    box-shadow: none !important; 

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;
