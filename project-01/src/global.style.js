import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

body {
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
}

.open-btn {
  margin: 10px 20px;
}

.custom-select-dropdown {
  background-color: #b3bcfd;
} 

.ant-input-password {
  background: #b3bcfd;
  border-color: #4096ff;
  border-radius: 5px;
}

`;

export default GlobalStyle;
