import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Board } from "./components/Board/Board";
import { darkTheme, lightTheme } from "./configs/defaultThemes";
import { AppTheme } from "./shared/enums/appTheme";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { IRootState } from "./store/state/IRootState";

export const App: React.FC<{}> = () => {
  const activeTheme = useSelector((s: IRootState) => s.gameBoard.theme);
  const chosenTheme = activeTheme === AppTheme.DARK ? darkTheme : lightTheme;
  //TEST: sniffler
  return (
    <div className="App>
      <ThemeProvider theme={chosenTheme}>
        <React.Fragment>
          <GlobalStyles />
          <Board />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

export default App;
