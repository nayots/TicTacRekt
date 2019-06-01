import React from "react";
import styled from "styled-components";
import { ITileProps } from "./ITileProps";

const BoardTile = styled.div<ITileProps>`
  color: red;
  grid-row: ${props => props.gridY} / span 1;
  grid-column: ${props => props.gridX} / span 1;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const TileContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Tile: React.FC<ITileProps> = (props): JSX.Element => {
  return (
    <React.Fragment>
      <BoardTile {...props}>
        <TileContent>
          <img
            src="https://via.placeholder.com/150"
            width="100%"
            height="100%"
            alt="dummypic"
          />
        </TileContent>
      </BoardTile>
    </React.Fragment>
  );
};
