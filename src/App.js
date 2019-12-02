import React from "react";
import "./App.css";
import { exportCSVFile } from "./exportToCSV";
import axios from "axios";
import blue1 from "./pics/blue1.png";
import blue2 from "./pics/blue2.png";
import blue3 from "./pics/blue3.png";
import blue4 from "./pics/blue4.png";
import blue5 from "./pics/blue5.png";
import blue6 from "./pics/blue6.png";
import blue7 from "./pics/blue7.png";
import red1 from "./pics/red1.png";
import red2 from "./pics/red2.png";
import red3 from "./pics/red3.png";
import red4 from "./pics/red4.png";
import red5 from "./pics/red5.png";
import red6 from "./pics/red6.png";
import red7 from "./pics/red7.png";
import green1 from "./pics/green1.png";
import green2 from "./pics/green2.png";
import green3 from "./pics/green3.png";
import green4 from "./pics/green4.png";
import green5 from "./pics/green5.png";
import green6 from "./pics/green6.png";
import green7 from "./pics/green7.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
