import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const header = props => (
  <AppBar>
    <Toolbar>
      <Typography color="inherit">ToDoApp</Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default header;
