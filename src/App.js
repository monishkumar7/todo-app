import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions";

class App extends Component {
  render() {
    return (
      <Typography onClick={this.props.onDisplayClick} variant="display1">
        {this.props.displayText}
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayText: state.helloText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDisplayClick: () => dispatch(actionCreators.sampleActionAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
