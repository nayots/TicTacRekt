import { TileStatus } from "../../shared/enums/tileState";

export interface ITileStyleProps {
  gridX: number;
  gridY: number;
}

export interface ITileOwnProps {
  status: TileStatus;
}

export type TileProps = ITileStyleProps & ITileOwnProps;
