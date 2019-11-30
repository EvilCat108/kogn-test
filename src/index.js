import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route } from "react-router-dom";
import StartPage from "./StartPage";
import FinalPage from "./FinalPage";

ReactDOM.render(
  <Switch>
    <Route exact path="/startPage" content={StartPage} />
    <Route exact path="/App" content={App} />
    <Route exact path="/finalPage" content={FinalPage} />
  </Switch>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
