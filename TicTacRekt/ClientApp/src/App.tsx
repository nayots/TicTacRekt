import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./configs/defaultThemes";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { connect } from "react-redux";
import { IRootState } from "./store/state/IRootState";
import { AppTheme } from "./shared/enums/appTheme";
import { Board } from "./components/Board/Board";

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
