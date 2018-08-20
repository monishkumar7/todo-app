import React from "react";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  todoCard: {
    padding: "1rem",
    margin: "1rem"
  }
};

const todoItem = props => {
  return (
    <Card className={props.classes.todoCard}>
      {props.id}
      {props.text}
    </Card>
  );
};

export default withStyles(styles)(todoItem);
