import * as React from "react";
import { Action } from "redux";
import { AppTheme } from "../../shared/enums/appTheme";

export const SET_THEME = "SET_THEME";

export const GameBoardActionTypes = { SET_THEME };

export interface SetTheme extends Action {
  type: typeof GameBoardActionTypes.SET_THEME;
  payload: AppTheme;
}

export type GameBoardActions = SetTheme;
