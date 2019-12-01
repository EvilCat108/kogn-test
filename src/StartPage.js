import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class StartPage extends React.Component {
  render() {
    return (
      <div class="center">
        Lūdzu, atbildiet vai jums patiks attēls vai ne pēc iespējas ātrāk. 1 -
        patik vismazak 5 - patik ļoti; Atbildi mainīt nevar. Lai sākt
        nospiediet.....
        <Link to="/app" className="btn">
          sākt...
        </Link>
      </div>
    );
  }
}

export default StartPage;
