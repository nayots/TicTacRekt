import clone from "clone";
import { TileStatus } from "../enums/tileState";

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
