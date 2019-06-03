import styled from "styled-components";
import { ITileStyleProps } from "./TileProps";

export const BoardTile = styled.div<ITileStyleProps>`
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

export const TileContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
