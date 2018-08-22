import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckBoxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  todoCard: {
    padding: "1rem",
    margin: "0.4rem 1rem"
  },
  text: {
    display: "inline-block"
  },
  icon: {
    fontSize: 20,
    color: theme.palette.icon
  },
  iconWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const todoItem = props => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.todoCard}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography
                onClick={props.status ? props.undoComplete : props.complete}
                className={classes.text}
                variant="body1"
              >
                {props.text}
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.iconWrap}>
              {props.status ? (
                <CheckBoxIcon className={classes.icon} />
              ) : (
                <CheckBoxBlankIcon className={classes.icon} />
              )}
            </Grid>
            <Grid item xs={1} className={classes.iconWrap}>
              <DeleteIcon onClick={props.deleteTodo} className={classes.icon} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(todoItem);
