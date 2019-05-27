import React from "react";
import "./App.css";
import { ThemeSwitcherConnected } from "./components/ThemeSwitcher/ThemeSwitcher";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./configs/defaultThemes";
import { GlobalStyles } from "./shared/styles/globalStyles";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <ThemeSwitcherConnected />
      </ThemeProvider>
    </div>
  );
};

export default App;
