import { Action } from "redux";
import { AppTheme } from "../../shared/enums/appTheme";

export const SET_THEME = "SET_THEME";
export const CLEAR_BOARD = "CLEAR_BOARD";

export const GameBoardActionTypes = { SET_THEME, CLEAR_BOARD };

export interface SetTheme extends Action {
  type: typeof GameBoardActionTypes.SET_THEME;
  payload: AppTheme;
}

export interface ClearBoard extends Action {
  type: typeof GameBoardActionTypes.CLEAR_BOARD;
}

export type GameBoardActions = SetTheme & ClearBoard;
