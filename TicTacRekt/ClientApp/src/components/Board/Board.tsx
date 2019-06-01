import React, { useMemo, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ThemeSwitcherConnected } from "../ThemeSwitcher/ThemeSwitcher";
import {
  BoardProps,
  IBoardOwnProps,
  IBoardConnectedProps,
  IBoardDispatchProps
} from "./IBoardProps";
import { IRootState } from "../../store/state/IRootState";
import { Dispatch } from "redux";
import { GameBoardActionTypes } from "../../store/actions/gameBoardActions";
import { connect } from "react-redux";
import { Tile } from "../Tile/Tile";
import { TileStatus } from "../../shared/enums/tileState";

const BoardHeader = styled.div`
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  justify-self: end;
`;

const BoardTiles = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  display: grid;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px auto auto;
`;

const BoardComponent: React.FC<BoardProps> = ({ boardMatrix }): JSX.Element => {
  const [tileElements, setTileElements] = useState(<React.Fragment />);

  useEffect(() => {
    setTileElements(() => {
      return (
        <React.Fragment>
          {boardMatrix.map((tsR: TileStatus[], rInd: number) => {
            return tsR.map((tsc: TileStatus, cInd: number) => {
              return <Tile gridY={rInd + 1} gridX={cInd + 1} />;
            });
          })}
        </React.Fragment>
      );
    });
  }, [boardMatrix]);

  return (
    <React.Fragment>
      <BoardGrid>
        <BoardHeader>
          <ThemeSwitcherConnected />
        </BoardHeader>
        <BoardTiles>{tileElements}</BoardTiles>
      </BoardGrid>
    </React.Fragment>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IBoardOwnProps
): IBoardConnectedProps => {
  return {
    boardMatrix: state.gameBoard.boardMatrix
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IBoardOwnProps
): IBoardDispatchProps => {
  return {
    clearBoard: () => {
      return dispatch({
        type: GameBoardActionTypes.CLEAR_BOARD
      });
    }
  };
};

export const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardComponent);
