import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Omark } from "../../shared/assets/oMark.svg";
import { ReactComponent as Xmark } from "../../shared/assets/xMark.svg";
import { GameState } from "../../shared/enums/gameState";
import { TileStatus } from "../../shared/enums/tileState";
import { flagsHelper } from "../../shared/services/utilities";
import { setPlayerSelection } from "../../store/actions/gameBoardActions";
import { IRootState } from "../../store/state/IRootState";
import * as S from "./styles";
import { TileProps } from "./TileProps";

export const Tile: React.FC<TileProps> = ({
  gridY,
  gridX,
  status
}): JSX.Element => {
  const dispatch = useDispatch();
  const gameIsHalted = useSelector((s: IRootState) => {
    const { gameState } = s.gameBoard;
    return (
      flagsHelper.hasFlag(gameState, GameState.Draw) ||
      flagsHelper.hasFlag(gameState, GameState.Player1Victory) ||
      flagsHelper.hasFlag(gameState, GameState.Player2Victory)
    );
  });
  const [tContent, setTContent] = useState<JSX.Element | null>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (isActive && !gameIsHalted) {
      dispatch(setPlayerSelection(gridY - 1, gridX - 1));
    }
  };

  useEffect(() => {
    setTContent(
      <React.Fragment>
        {status === TileStatus.Player1 ? (
          <Xmark />
        ) : status === TileStatus.Player2 ? (
          <Omark />
        ) : null}
      </React.Fragment>
    );
    setIsActive(status === TileStatus.Empty);
  }, [status]);

  return (
    <React.Fragment>
      <S.BoardTile gridX={gridX} gridY={gridY} onClick={handleClick}>
        <S.TileContent isActive={isActive && !gameIsHalted}>
          {tContent}
        </S.TileContent>
      </S.BoardTile>
    </React.Fragment>
  );
};
export default Tile;
