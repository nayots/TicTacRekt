import { ClearBoardAction } from "../../store/actions/gameBoardActions";
import { TileStatus } from "../../shared/enums/tileState";

export interface IBoardOwnProps {}
export interface IBoardConnectedProps {
  boardMatrix: TileStatus[][];
}
export interface IBoardDispatchProps {
  clearBoard(): ClearBoardAction;
}

export type BoardProps = IBoardOwnProps &
  IBoardConnectedProps &
  IBoardDispatchProps;
