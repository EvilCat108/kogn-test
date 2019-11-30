import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class StartPage extends React.Component {
  render() {
    return (
      <div>
        Start Page
        <button to="/app">Start</button>
        <Col xs="6" className="text-right">
          <Link to="/app" className="btn">
            Start
          </Link>
        </Col>
        <Link to="/app" className="btn">
          Start
        </Link>
        {/* <button onClick={App}>Start</button> */}
      </div>
    );
  }
}

export default StartPage;
