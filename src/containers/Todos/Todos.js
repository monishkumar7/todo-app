import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";
import * as actionCreators from "../../store/actions";
import { Button, Typography, Grid } from "@material-ui/core";

class Todos extends Component {
  render() {
    const todos = this.props.todos.map(todoItem => (
      <TodoItem
        key={todoItem.todoId}
        id={todoItem.todoId}
        text={todoItem.text}
        status={todoItem.completed}
        complete={() => this.props.onCompleteTodo(todoItem.todoId)}
        undoComplete={() => this.props.onUndoCompleteTodo(todoItem.todoId)}
        deleteTodo={() => this.props.onDeleteTodoAPI(todoItem.todoId)}
      />
    ));
    return (
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="space-between"
      >
        <Grid item xs={12}>
          {todos}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.props.onCreateTodoAPI("New Todo", "1");
                }}
              >
                <Typography variant="button" color="inherit">
                  Create New Todo
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCompleteTodo: todoId => dispatch(actionCreators.completeTodo(todoId)),
    onUndoCompleteTodo: todoId =>
      dispatch(actionCreators.undoCompleteTodo(todoId)),
    onCreateTodoAPI: (text, userId) =>
      dispatch(actionCreators.createTodoAPI(text, userId)),
    onDeleteTodoAPI: todoId => dispatch(actionCreators.deleteTodoAPI(todoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
