import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTheme } from "../../shared/enums/appTheme";
import { setTheme } from "../../store/actions/gameBoardActions";
import { IRootState } from "../../store/state/IRootState";
import * as S from "./styles";
import { ThemeSwitcherProps } from "./ThemeSwitcherProps";

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const theme = useSelector((s: IRootState) => s.gameBoard.theme);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <S.SwitchButton
        onClick={() =>
          dispatch(
            setTheme(theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK)
          )
        }
      >
        Change
      </S.SwitchButton>
    </React.Fragment>
  );
};

export default ThemeSwitcher;
