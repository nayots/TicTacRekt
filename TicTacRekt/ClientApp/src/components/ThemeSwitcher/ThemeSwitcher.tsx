import React from "react";
import {
  ThemeSwitcherProps,
  IThemeSwitcherOwnProps,
  IThemeSwitcherConnectedProps,
  IThemeSwitcherDispatchProps
} from "./ThemeSwitcherProps";
import { AppTheme } from "../../shared/enums/appTheme";
import { IRootState } from "../../store/state/IRootState";
import { Dispatch } from "redux";
import { setTheme } from "../../store/actions/gameBoardActions";
import { connect } from "react-redux";
import * as S from "./styles";

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  onThemeChange
}: ThemeSwitcherProps) => {
  return (
    <React.Fragment>
      <S.SwitchButton
        onClick={() =>
          onThemeChange(
            theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK
          )
        }
      >
        Change
      </S.SwitchButton>
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
      return dispatch(setTheme(value));
    }
  };
};

export const ThemeSwitcherConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcher);
