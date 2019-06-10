import clone from "clone";
import { TileStatus } from "../enums/tileState";
import { GameState } from "../enums/gameState";
import { flagsHelper } from "./utilities";

export const applySelection = (
  boardMatrix: TileStatus[][],
  row: number,
  col: number,
  statusToApply: TileStatus
): TileStatus[][] => {
  const matrixCopy = clone(boardMatrix);
  matrixCopy[row][col] = statusToApply;
  return matrixCopy;
};

export const checkBoard = (
  boardMatrix: TileStatus[][],
  prevGameState: GameState
): GameState => {
  return prevGameState;
};
