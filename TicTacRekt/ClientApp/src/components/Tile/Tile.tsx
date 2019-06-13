import React, { useState, useEffect } from "react";
import * as S from "./styles";
import {
  TileProps,
  ITileOwnProps,
  ITileConnectedProps,
  ITileDispatchProps
} from "./TileProps";
import { ReactComponent as Xmark } from "../../shared/assets/xMark.svg";
import { ReactComponent as Omark } from "../../shared/assets/oMark.svg";
import { TileStatus } from "../../shared/enums/tileState";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "../../store/state/IRootState";
import {
  setPlayerSelection
} from "../../store/actions/gameBoardActions";
import { flagsHelper } from "../../shared/services/utilities";
import { GameState } from "../../shared/enums/gameState";

export const TileComponent: React.FC<TileProps> = ({
  gridY,
  gridX,
  status,
  onTileClick,
  gameIsHalted
}): JSX.Element => {
  const [tContent, setTContent] = useState<JSX.Element | null>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (isActive && !gameIsHalted) {
      onTileClick(gridY - 1, gridX - 1);
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

const mapStateToProps = (
  state: IRootState,
  ownProps: ITileOwnProps
): ITileConnectedProps => {
  return {
    gameIsHalted:
      flagsHelper.hasFlag(state.gameBoard.gameState, GameState.Draw) ||
      flagsHelper.hasFlag(
        state.gameBoard.gameState,
        GameState.Player1Victory
      ) ||
      flagsHelper.hasFlag(state.gameBoard.gameState, GameState.Player2Victory)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: ITileOwnProps
): ITileDispatchProps => {
  return {
    onTileClick: (row: number, col: number) => {
      return dispatch(setPlayerSelection(row, col));
    }
  };
};

export const Tile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileComponent);
