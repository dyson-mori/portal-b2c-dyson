import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;

    background-color: ${theme.colors.background};
  };

  a {
    color: inherit;
    text-decoration: none;
    font-family: var(--font-montserrat_alternates);
  };

  input {
    font-family: var(--font-montserrat_alternates);
  }
`;