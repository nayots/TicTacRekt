import styled, { keyframes } from "styled-components";
import { ITileStyleProps } from "./TileProps";

const rotateAndScale = keyframes`
  from {
    transform: rotate(0deg) scale(0.2);
  }

  to {
    transform: rotate(360deg) scale(1);
  }
`;

export const BoardTile = styled.div<ITileStyleProps>`
  color: red;
  grid-row: ${props => props.gridY} / span 1;
  grid-column: ${props => props.gridX} / span 1;
  position: relative;
  border: 1px ${props => props.theme.colors.main} solid;
  border-radius: 5%;
  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  animation: ${rotateAndScale} 1s;
  transition: transform 1s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 5px white;
    transform: rotate(360deg) scale(1.1);
    z-index: 2;
  }
`;

export const TileContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
