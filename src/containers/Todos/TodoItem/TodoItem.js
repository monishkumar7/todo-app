import React from "react";
import { Card, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckBoxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  todoCard: {
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    display: "inline-block"
  },
  icon: {
    display: "inline-block",
    fontSize: 25,
    color: theme.palette.icon
  }
});

const todoItem = props => {
  const { classes } = props;
  return (
    <Card className={classes.todoCard}>
      <Typography
        onClick={props.status ? props.undoComplete : props.complete}
        className={classes.text}
        variant="body1"
      >
        {props.text}
      </Typography>
      {props.status ? (
        <CheckBoxIcon className={classes.icon} />
      ) : (
        <CheckBoxBlankIcon className={classes.icon} />
      )}
      <DeleteIcon onClick={props.deleteTodo} />
    </Card>
  );
};

export default withStyles(styles)(todoItem);
