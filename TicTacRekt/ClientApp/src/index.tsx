import React from "react";
import ReactDOM from "react-dom";
import * as Redux from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IRootState } from "./store/state/IRootState";
import { gameBoardReducer } from "./store/reducers/gameBoardReducer";
import { Provider } from "react-redux";

const rootReducer: Redux.Reducer<IRootState> = Redux.combineReducers({
  gameBoard: gameBoardReducer
});
const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
