import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
// To use routing in react install  below package/module
// npm install --save-dev react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div>
        <Routing />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
