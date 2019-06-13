import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { Dispatch } from "redux";
import { TileStatus } from "../../shared/enums/tileState";
import { GameBoardActionTypes } from "../../store/actions/gameBoardActions";
import { IRootState } from "../../store/state/IRootState";
import { ThemeSwitcherConnected } from "../ThemeSwitcher/ThemeSwitcher";
import { Tile } from "../Tile/Tile";
import {
  BoardProps,
  IBoardConnectedProps,
  IBoardDispatchProps,
  IBoardOwnProps
} from "./BoardProps";
import * as S from "./styles";

import history from "../../shared/history/history";

const BoardComponent: React.FC<BoardProps> = ({ boardMatrix }): JSX.Element => {
  const [tileElements, setTileElements] = useState(<React.Fragment />);

  useEffect(() => {
    setTileElements(() => {
      return (
        <React.Fragment>
          {boardMatrix.map((tsR: TileStatus[], rInd: number) => {
            return tsR.map((tsc: TileStatus, cInd: number) => {
              return (
                <Tile
                  key={`${rInd}_${cInd}`}
                  status={tsc}
                  gridY={rInd + 1}
                  gridX={cInd + 1}
                />
              );
            });
          })}
        </React.Fragment>
      );
    });
  }, [boardMatrix]);

  return (
    <React.Fragment>
      <S.BoardGrid>
        <S.BoardHeader>
          <ThemeSwitcherConnected />
        </S.BoardHeader>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <S.BoardTiles>{tileElements}</S.BoardTiles>;
              }}
            />
          </Switch>
        </Router>
      </S.BoardGrid>
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
