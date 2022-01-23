import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

const reduxStore = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    {/* boc provider de ep tk redux chay song song voi react */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
