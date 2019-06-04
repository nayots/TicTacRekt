import { Action } from "redux";
import { AppTheme } from "../../shared/enums/appTheme";

export const SET_THEME = "SET_THEME";
export const CLEAR_BOARD = "CLEAR_BOARD";
export const SET_PLAYER_SELECTION = "SET_PLAYER_SELECTION";

export const GameBoardActionTypes = {
  SET_THEME,
  CLEAR_BOARD,
  SET_PLAYER_SELECTION
};

export interface SetTheme extends Action {
  type: typeof GameBoardActionTypes.SET_THEME;
  payload: AppTheme;
}

export interface ClearBoard extends Action {
  type: typeof GameBoardActionTypes.CLEAR_BOARD;
}

export interface SetPlayerSelection extends Action {
  type: typeof GameBoardActionTypes.SET_PLAYER_SELECTION;
  payload: { row: number; col: number };
}

export type GameBoardActions = SetTheme & ClearBoard & SetPlayerSelection;
