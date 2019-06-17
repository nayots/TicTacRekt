import styled from "styled-components";

export const BoardHeader = styled.div`
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  justify-self: end;
`;

export const BoardMainStage = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  display: grid;
  grid-gap: 5px;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px auto auto;
`;
