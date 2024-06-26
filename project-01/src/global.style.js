import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    background: aliceblue;
  }

  body {
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;  
  }

  .open-btn {
    margin: 10px 20px;
  }

  .custom-select-dropdown {
    background-color: #77e789;
  } 

  .ant-input-password {
    background: #b3bcfd;
    border-color: #4096ff;
    border-radius: 5px;
    width: 200px;
  }
`;

export default GlobalStyle;
