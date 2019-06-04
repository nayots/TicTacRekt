import { TileStatus } from "../../shared/enums/tileState";
import { SetPlayerSelection } from "../../store/actions/gameBoardActions";

export interface ITileStyleProps {
  gridX: number;
  gridY: number;
}

export interface ITileOwnProps {
  status: TileStatus;
}

export interface ITileConnectedProps {}

export interface ITileDispatchProps {
  onTileClick(row: number, col: number): SetPlayerSelection;
}

export type TileProps = ITileStyleProps &
  ITileOwnProps &
  ITileConnectedProps &
  ITileDispatchProps;
