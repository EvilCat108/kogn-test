import React from "react";
import "./App.css";

import { StartPage } from "./StartPage";
import { FinalPage } from "./FinalPage";
import { Test } from "./Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
          <Route path="/end">
            <FinalPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
