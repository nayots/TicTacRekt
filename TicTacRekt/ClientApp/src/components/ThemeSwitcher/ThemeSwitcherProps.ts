import { AppTheme } from "../../shared/enums/appTheme";
import { SetThemeAction } from "../../store/actions/gameBoardActions";

export interface IThemeSwitcherOwnProps {}

export interface IThemeSwitcherConnectedProps {
  theme: AppTheme;
}

export interface IThemeSwitcherDispatchProps {
  onThemeChange: (value: AppTheme) => SetThemeAction;
}

export type ThemeSwitcherProps = IThemeSwitcherOwnProps &
  IThemeSwitcherConnectedProps &
  IThemeSwitcherDispatchProps;
