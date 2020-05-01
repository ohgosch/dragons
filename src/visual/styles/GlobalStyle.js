import { createGlobalStyle } from "styled-components";

import { OpenSans, Staatliches } from "visual/fonts";
import { COLORS } from "visual/constants";

export const GlobalStyle = createGlobalStyle`
  ${OpenSans}
  ${Staatliches}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.greyWhite};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
