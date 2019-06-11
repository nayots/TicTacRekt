import clone from "clone";
import { TileStatus } from "../enums/tileState";
import { GameState } from "../enums/gameState";
import { Turn } from "../enums/turn";

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

export const checkBoard = (boardMatrix: TileStatus[][]): GameState => {
  const r1wSum = boardMatrix[0].reduce((acc, cur) => acc + cur, 0);
  const r2wSum = boardMatrix[1].reduce((acc, cur) => acc + cur, 0);
  const r3wSum = boardMatrix[2].reduce((acc, cur) => acc + cur, 0);
  const c1wSum = [
    boardMatrix[0][0],
    boardMatrix[1][0],
    boardMatrix[2][0]
  ].reduce((acc, cur) => acc + cur, 0);
  const c2wSum = [
    boardMatrix[0][1],
    boardMatrix[1][1],
    boardMatrix[2][1]
  ].reduce((acc, cur) => acc + cur, 0);
  const c3wSum = [
    boardMatrix[0][2],
    boardMatrix[1][2],
    boardMatrix[2][2]
  ].reduce((acc, cur) => acc + cur, 0);
  const vr1Sum = [
    boardMatrix[0][0],
    boardMatrix[1][1],
    boardMatrix[2][2]
  ].reduce((acc, cur) => acc + cur, 0);
  const vr2Sum = [
    boardMatrix[0][2],
    boardMatrix[1][1],
    boardMatrix[2][0]
  ].reduce((acc, cur) => acc + cur, 0);

  if (r1wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (r1wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (r2wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (r2wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (r3wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (r3wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (c1wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (c1wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (c2wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (c2wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (c3wSum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (c3wSum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (vr1Sum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (vr1Sum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }
  if (vr2Sum === TileStatus.Player1 * 3) {
    return GameState.Player1Victory;
  } else if (vr2Sum === TileStatus.Player2 * 3) {
    return GameState.Player2Victory;
  }

  return GameState.InProgress;
};
