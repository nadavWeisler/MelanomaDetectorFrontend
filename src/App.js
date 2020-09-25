import React, { Component } from "react";
import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import tc from "./tconfig.json";

navigator.app_lang = tc.language[tc.default_lang];
if (navigator.language && tc.language[navigator.language]) {
  navigator.app_lang = tc.language[navigator.language];
}

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
