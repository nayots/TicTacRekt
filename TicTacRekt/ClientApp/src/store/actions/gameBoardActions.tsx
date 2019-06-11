import { AppTheme } from "../../shared/enums/appTheme";

export enum GameBoardActionTypes {
  SET_THEME = "SET_THEME",
  CLEAR_BOARD = "CLEAR_BOARD",
  SET_PLAYER_SELECTION = "SET_PLAYER_SELECTION"
}

export type SetThemeAction = {
  type: typeof GameBoardActionTypes.SET_THEME;
  payload: AppTheme;
};
export const setTheme = (theme: AppTheme): SetThemeAction => {
  return {
    type: GameBoardActionTypes.SET_THEME,
    payload: theme
  };
};

export type ClearBoardAction = {
  type: typeof GameBoardActionTypes.CLEAR_BOARD;
};
export const clearBoard = (): ClearBoardAction => {
  return {
    type: GameBoardActionTypes.CLEAR_BOARD
  };
};

export type SetPlayerSelectionAction = {
  type: typeof GameBoardActionTypes.SET_PLAYER_SELECTION;
  payload: { row: number; col: number };
};

export const setPlayerSelection = (
  row: number,
  col: number
): SetPlayerSelectionAction => {
  return {
    type: GameBoardActionTypes.SET_PLAYER_SELECTION,
    payload: { row, col }
  };
};

export type GameBoardActions =
  | SetThemeAction
  | SetPlayerSelectionAction
  | ClearBoardAction;
