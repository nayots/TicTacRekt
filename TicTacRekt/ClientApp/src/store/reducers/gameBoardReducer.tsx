import {
  GameBoardActions,
  GameBoardActionTypes
} from "../actions/gameBoardActions";
import { AppTheme } from "../../shared/enums/appTheme";
import { TileStatus } from "../../shared/enums/tileState";

export interface IGameBoardState {
  theme: AppTheme;
  boardMatrix: TileStatus[][];
}

const initialState: IGameBoardState = {
  theme: AppTheme.DARK,
  boardMatrix: new Array(3).fill(new Array(3).fill(TileStatus.Empty))
};

const gameBoardReducer = (
  state: IGameBoardState = initialState,
  action: GameBoardActions
): IGameBoardState => {
  switch (action.type) {
    case GameBoardActionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    case GameBoardActionTypes.CLEAR_BOARD:
      return {
        ...state,
        boardMatrix: new Array(3).fill(new Array(3).fill(TileStatus.Empty))
      };
    default:
      break;
  }

  return state;
};

export { gameBoardReducer };
