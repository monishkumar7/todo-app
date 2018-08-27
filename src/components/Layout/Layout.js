import React, { Fragment } from "react";
import Header from "./Header/Header";

const layout = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
);

export default layout;
