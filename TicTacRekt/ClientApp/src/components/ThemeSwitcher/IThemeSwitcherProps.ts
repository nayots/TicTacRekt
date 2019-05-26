import { AppTheme } from "../../shared/enums/appTheme";
import { SetTheme } from "../../store/actions/gameBoardActions";

export interface IThemeSwitcherOwnProps {}

export interface IThemeSwitcherConnectedProps {
  theme: AppTheme;
}

export interface IThemeSwitcherDispatchProps {
  onThemeChange: (value: AppTheme) => SetTheme;
}

export type ThemeSwitcherProps = IThemeSwitcherOwnProps &
  IThemeSwitcherConnectedProps &
  IThemeSwitcherDispatchProps;
