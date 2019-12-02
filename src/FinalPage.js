import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
class FinalPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description Test</p>
        <Link to="/test">
          <button className="button-container">Run Test</button>
        </Link>
      </div>
    );
  }
}

export default FinalPage;
