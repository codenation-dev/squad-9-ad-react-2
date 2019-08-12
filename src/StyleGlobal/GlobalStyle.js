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
    height: 100%;
    overflow-x: hidden;
  }

  .page-link {
    color: #a1a1a2 !important
  }

  .page-link:focus {
    box-shadow: none !important; 
  }


  .page-item.active .page-link {
    background-color: #303f52 !important;
    border-color: #303f52 !important;
    color: #fff !important; 
  }

  #doc-body {
    transition: margin 1s;
  }



  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;
