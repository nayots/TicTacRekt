import { TileStatus } from "../../shared/enums/tileState";
import { SetPlayerSelectionAction } from "../../store/actions/gameBoardActions";

export interface ITileStyleProps {
  gridX: number;
  gridY: number;
}

export interface ITileOwnProps {
  status: TileStatus;
}

export interface ITileConnectedProps {
  gameIsHalted: boolean;
}

export interface ITileDispatchProps {
  onTileClick(row: number, col: number): SetPlayerSelectionAction;
}

export type TileProps = ITileStyleProps &
  ITileOwnProps &
  ITileConnectedProps &
  ITileDispatchProps;
