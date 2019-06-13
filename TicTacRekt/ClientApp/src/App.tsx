import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Board } from "./components/Board/Board";
import { darkTheme, lightTheme } from "./configs/defaultThemes";
import { AppTheme } from "./shared/enums/appTheme";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { IRootState } from "./store/state/IRootState";

interface IAppOwnProps {}

interface IAppConnectedProps {
  activeTheme: AppTheme;
}

type AppProps = IAppOwnProps & IAppConnectedProps;

const AppComponent: React.FC<AppProps> = ({ activeTheme }) => {
  const chosenTheme = activeTheme === AppTheme.DARK ? darkTheme : lightTheme;

  return (
    <div className="App">
      <ThemeProvider theme={chosenTheme}>
        <React.Fragment>
          <GlobalStyles />
          <Board />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IAppOwnProps
): IAppConnectedProps => {
  return {
    activeTheme: state.gameBoard.theme
  };
};

const App = connect(
  mapStateToProps,
  undefined
)(AppComponent);

export default App;
