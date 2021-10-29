import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/backoffice" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
