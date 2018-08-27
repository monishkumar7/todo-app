import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";

//TODO:
//2. Add Authentication
//3. Add Lists?

class App extends Component {
  state = {
    isAuthenticated: false
  };

  render() {
    return (
      <BrowserRouter>
        <Layout auth={this.state.isAuthenticated}>
          <Home />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
