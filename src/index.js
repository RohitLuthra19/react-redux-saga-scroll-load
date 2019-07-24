import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import Dashboard from "./routes/Dashboard";
import './index.css';

import { categoriesWatcherSaga } from "./redux/categories/sagas";
import { singleCategoryWatcherSaga } from "./redux/categories/sagas-single-category";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(categoriesWatcherSaga);
sagaMiddleware.run(singleCategoryWatcherSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <Dashboard/>
  </Provider>,
  document.getElementById("root")
);
