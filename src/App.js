import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

import Todos from "./containers/Todos/Todos";

//TODO:
//1. Edit Todos
//2. Add Authentication
//3. Add Lists?

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="display1">ToDo App</Typography>
        <Todos />
      </Fragment>
    );
  }
}

export default App;
