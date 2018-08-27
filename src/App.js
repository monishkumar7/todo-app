import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import Todos from "./containers/Todos/Todos";
import Layout from "./components/Layout/Layout";

//TODO:
//2. Add Authentication
//3. Add Lists?

class App extends Component {
  render() {
    return (
      <Layout>
        <Typography variant="display1">ToDo App</Typography>
        <Todos />
      </Layout>
    );
  }
}

export default App;
