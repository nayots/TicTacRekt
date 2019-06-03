import React from "react";
import * as S from "./styles";
import { ITileProps } from "./ITileProps";

export const Tile: React.FC<ITileProps> = (props): JSX.Element => {
  return (
    <React.Fragment>
      <S.BoardTile {...props}>
        <S.TileContent>
          <img
            src="https://via.placeholder.com/150"
            width="100%"
            height="100%"
            alt="dummypic"
          />
        </S.TileContent>
      </S.BoardTile>
    </React.Fragment>
  );
};
