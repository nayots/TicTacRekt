import React from "react";
import * as S from "./styles";
import { TileProps } from "./TileProps";
import { ReactComponent as Xmark } from "../../shared/assets/xMark.svg";
import { ReactComponent as Omark } from "../../shared/assets/oMark.svg";
import { TileStatus } from "../../shared/enums/tileState";

export const Tile: React.FC<TileProps> = (props): JSX.Element => {
  return (
    <React.Fragment>
      <S.BoardTile {...props}>
        <S.TileContent>
          {/* <img
            src="https://via.placeholder.com/150"
            width="100%"
            height="100%"
            alt="dummypic"
          /> */}
          {props.status === TileStatus.Player1 ? (
            <Xmark />
          ) : props.status === TileStatus.Player2 ? (
            <Omark />
          ) : null}
        </S.TileContent>
      </S.BoardTile>
    </React.Fragment>
  );
};
