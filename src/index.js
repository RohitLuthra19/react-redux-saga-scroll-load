import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Dashboard from "./routes/Dashboard";
import './index.css';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById("root") || document.createElement('div')
);
