import { TileStatus } from "../../shared/enums/tileState";
import { SetPlayerSelectionAction } from "../../store/actions/gameBoardActions";

export interface ITileStyleProps {
  gridX: number;
  gridY: number;
}

export interface ITileOwnProps {
  status: TileStatus;
}

export type TileProps = ITileStyleProps & ITileOwnProps;
