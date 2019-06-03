import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body * {
    @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;
  }
  body {
    background-color: ${props => props.theme.colors.secondary}
  }
`;
