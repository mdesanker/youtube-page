import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: roboto, helvetica, arial, sans-serif;
  }

  body {
    width: 100%;
    /* Footer placement */
    min-height: 100vh;
    position: relative;
  }
`;

export default GlobalStyles;
