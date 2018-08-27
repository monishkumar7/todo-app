import React, { Component, Fragment } from "react";
import { Card, Typography, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckBoxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Create";
import SaveIcon from "@material-ui/icons/Save";

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

class TodoItem extends Component {
  state = {
    editMode: false
  };

  editModeToggleHandler = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  handleTextChange = () => {
    console.log("Text change");
  };

  render() {
    const { classes } = this.props;

    const viewContent = (
      <Fragment>
        <Grid item xs={9}>
          <Typography
            onClick={
              this.props.status ? this.props.undoComplete : this.props.complete
            }
            className={classes.text}
            variant="body1"
          >
            {this.props.text}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.iconWrap}>
          {this.props.status ? (
            <CheckBoxIcon className={classes.icon} />
          ) : (
            <CheckBoxBlankIcon className={classes.icon} />
          )}
        </Grid>
        <Grid item xs={1} className={classes.iconWrap}>
          <DeleteIcon
            onClick={this.props.deleteTodo}
            className={classes.icon}
          />
        </Grid>
        <Grid item xs={1} className={classes.iconWrap}>
          <EditIcon
            onClick={this.editModeToggleHandler}
            className={classes.icon}
          />
        </Grid>
      </Fragment>
    );

    const editContent = (
      <Fragment>
        <Grid item xs={10}>
          <TextField value={this.props.text} onChange={this.handleTextChange} />
        </Grid>
        <Grid item xs={1} className={classes.iconWrap}>
          <DeleteIcon
            onClick={this.props.deleteTodo}
            className={classes.icon}
          />
        </Grid>
        <Grid item xs={1} className={classes.iconWrap}>
          <SaveIcon
            onClick={this.editModeToggleHandler}
            className={classes.icon}
          />
        </Grid>
      </Fragment>
    );
    return (
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.todoCard}>
            <Grid container alignItems="center">
              {this.state.editMode ? editContent : viewContent}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TodoItem);
