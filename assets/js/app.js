import "regenerator-runtime/runtime";
import "bootstrap";
import css from "../css/app.scss";
import "phoenix_html";

import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Light from "./components/light";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    reduxExtension
  )
);

saga.run(rootSaga);

const App = () => (
  <div>
    <Light />
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
