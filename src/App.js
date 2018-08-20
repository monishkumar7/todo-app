import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <Typography variant="display1">{this.props.displayText}</Typography>;
  }
}

const mapStateToProps = state => {
  return {
    displayText: state.helloText
  };
};

export default connect(mapStateToProps)(App);
