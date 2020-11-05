import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  body {
    background: #121214;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }


  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
