import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Todos from "../Todos/Todos";
import Auth from "../Auth/Auth";

class Home extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/" component={Auth} />
      </Switch>
    );
  }
}

export default Home;
