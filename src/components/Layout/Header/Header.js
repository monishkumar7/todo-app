import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  navlink: {
    textDecoration: "none",
    color: "white",
    padding: ".2rem 2rem"
  },
  navlinkSelected: {
    backgroundColor: theme.palette.secondary.light
  },
  headerToolbar: {
    justifyContent: "space-between"
  }
});

const header = props => {
  let navlinks = null;
  const { classes } = props;
  props.auth
    ? (navlinks = (
        <Fragment>
          <Button>
            <NavLink
              to="/todos"
              className={classes.navlink}
              activeClassName={classes.navlinkSelected}
            >
              Todos
            </NavLink>
          </Button>
          <Button>
            <NavLink
              to="/logout"
              className={classes.navlink}
              activeClassName={classes.navlinkSelected}
            >
              Logout
            </NavLink>
          </Button>
        </Fragment>
      ))
    : (navlinks = (
        <Button>
          <NavLink
            to="/auth"
            className={classes.navlink}
            activeClassName={classes.navlinkSelected}
          >
            Login
          </NavLink>
        </Button>
      ));

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.headerToolbar}>
        <Typography color="inherit" variant="title">
          ToDoApp
        </Typography>
        <div>{navlinks}</div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(header);
