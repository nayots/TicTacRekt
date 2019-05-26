import React, { useState } from "react";
import {
  ThemeSwitcherProps,
  IThemeSwitcherOwnProps,
  IThemeSwitcherConnectedProps,
  IThemeSwitcherDispatchProps
} from "./IThemeSwitcherProps";
import { AppTheme } from "../../shared/enums/appTheme";
import { IRootState } from "../../store/state/IRootState";
import { Dispatch } from "redux";
import { GameBoardActionTypes } from "../../store/actions/gameBoardActions";
import { connect } from "react-redux";

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  onThemeChange
}: ThemeSwitcherProps) => {
  return (
    <React.Fragment>
      <h2>Current theme is {theme}</h2>
      <button
        onClick={() =>
          onThemeChange(
            theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK
          )
        }
      >
        Change
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IThemeSwitcherOwnProps
): IThemeSwitcherConnectedProps => {
  return {
    theme: state.gameBoard.theme
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IThemeSwitcherOwnProps
): IThemeSwitcherDispatchProps => {
  return {
    onThemeChange: (value: AppTheme) => {
      return dispatch({
        type: GameBoardActionTypes.SET_THEME,
        payload: value
      });
    }
  };
};

export const ThemeSwitcherConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcher);
