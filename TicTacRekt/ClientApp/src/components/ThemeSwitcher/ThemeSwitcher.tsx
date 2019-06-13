import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppTheme } from "../../shared/enums/appTheme";
import { setTheme } from "../../store/actions/gameBoardActions";
import { IRootState } from "../../store/state/IRootState";
import * as S from "./styles";
import {
  IThemeSwitcherConnectedProps,
  IThemeSwitcherDispatchProps,
  IThemeSwitcherOwnProps,
  ThemeSwitcherProps
} from "./ThemeSwitcherProps";

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
