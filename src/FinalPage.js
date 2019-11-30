import React from "react";
import { Link } from "react-router-dom";

export class FinalPage extends React.Component {
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
