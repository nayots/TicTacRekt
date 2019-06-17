import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { TileStatus } from "../../shared/enums/tileState";
import { IRootState } from "../../store/state/IRootState";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Tile } from "../Tile/Tile";
import { BoardProps } from "./BoardProps";
import * as S from "./styles";

import history from "../../shared/history/history";

export const Board: React.FC<BoardProps> = (): JSX.Element => {
  const [tileElements, setTileElements] = useState(<React.Fragment />);
  const boardMatrix = useSelector((s: IRootState) => s.gameBoard.boardMatrix);

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
          <ThemeSwitcher />
        </S.BoardHeader>
        <S.BoardMainStage>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <React.Fragment>{tileElements}</React.Fragment>;
                }}
              />
            </Switch>
          </Router>
        </S.BoardMainStage>
      </S.BoardGrid>
    </React.Fragment>
  );
};

export default Board;
