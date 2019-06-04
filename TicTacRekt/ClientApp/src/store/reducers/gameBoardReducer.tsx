import {
  GameBoardActions,
  GameBoardActionTypes
} from "../actions/gameBoardActions";
import { AppTheme } from "../../shared/enums/appTheme";
import { TileStatus } from "../../shared/enums/tileState";
import { applySelection } from "../../shared/services/boardUtilities";

export interface IGameBoardState {
  theme: AppTheme;
  boardMatrix: TileStatus[][];
}

const initialState: IGameBoardState = {
  theme: AppTheme.DARK,
  boardMatrix: [
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty]
  ]
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
        boardMatrix: [
          [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
          [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
          [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty]
        ]
      };
    case GameBoardActionTypes.SET_PLAYER_SELECTION:
      return {
        ...state,
        boardMatrix: applySelection(
          state.boardMatrix,
          action.payload.row,
          action.payload.col,
          TileStatus.Player1
        )
      };
    default:
      break;
  }

  return state;
};

export { gameBoardReducer };
