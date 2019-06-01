import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "#121212",
    secondary: "#292929",
    third: "#bb86fc",
    fourth: "#d8d8d8"
  },
  text: {
    smallSize: "12px",
    normalSize: "18px",
    largeSize: "25px"
  }
};

const lightTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "#d7f7f5",
    secondary: "#75cac3",
    third: "#2a6171",
    fourth: "#f34573"
  },
  text: {
    smallSize: "12px",
    normalSize: "18px",
    largeSize: "25px"
  }
};

export { darkTheme, lightTheme };
