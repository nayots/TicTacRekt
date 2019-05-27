import {
  GameBoardActions,
  GameBoardActionTypes
} from "../actions/gameBoardActions";
import { AppTheme } from "../../shared/enums/appTheme";

export interface IGameBoardState {
  theme: AppTheme;
}

const initialState: IGameBoardState = {
  theme: AppTheme.DARK
};

const gameBoardReducer = (
  state: IGameBoardState = initialState,
  action: GameBoardActions
) => {
  switch (action.type) {
    case GameBoardActionTypes.SET_THEME:
      return { ...state, theme: action.payload };

    default:
      break;
  }

  return state;
};

export { gameBoardReducer };
