import {
  GameBoardActions,
  GameBoardActionTypes
} from "../actions/gameBoardActions";
import { AppTheme } from "../../shared/enums/appTheme";
import { TileStatus } from "../../shared/enums/tileState";
import {
  applySelection,
  checkBoard
} from "../../shared/services/boardUtilities";
import { GameState } from "../../shared/enums/gameState";
import { Turn } from "../../shared/enums/turn";

export interface IGameBoardState {
  theme: AppTheme;
  boardMatrix: TileStatus[][];
  gameState: GameState;
  currentTurn: Turn;
}

const initialState: IGameBoardState = {
  theme: AppTheme.DARK,
  boardMatrix: [
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty],
    [TileStatus.Empty, TileStatus.Empty, TileStatus.Empty]
  ],
  gameState: GameState.NotStarted,
  currentTurn: Turn.Player1
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
      const selectionMatrixResult = applySelection(
        state.boardMatrix,
        action.payload.row,
        action.payload.col,
        state.currentTurn === Turn.Player1 ? TileStatus.Player1 : TileStatus.Player2
      );
      const newGameState = checkBoard(selectionMatrixResult, state.gameState);
      return {
        ...state,
        boardMatrix: selectionMatrixResult,
        gameState: newGameState,
        currentTurn: state.currentTurn === Turn.Player1 ? Turn.Player2 : Turn.Player1
      };
    default:
      break;
  }

  return state;
};

export { gameBoardReducer };
