import React, { Fragment } from "react";
import Header from "./Header/Header";
import { CssBaseline } from "@material-ui/core";

const layout = props => (
  <Fragment>
    <CssBaseline />
    <Header auth={props.auth} />
    {props.children}
  </Fragment>
);

export default layout;
