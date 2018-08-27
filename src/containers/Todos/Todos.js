import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";
import * as actionCreators from "../../store/actions";
import { Button, Typography, Grid } from "@material-ui/core";

class Todos extends Component {
  componentDidMount = () => {
    this.props.onFetchTodos();
  };

  completeTodo = todoItem => {
    this.props.onUpdateTodo({
      todoId: todoItem.todoId,
      text: todoItem.text,
      completed: true,
      userId: todoItem.userId
    });
  };

  undoCompleteTodo = todoItem => {
    this.props.onUpdateTodo({
      todoId: todoItem.todoId,
      text: todoItem.text,
      completed: false,
      userId: todoItem.userId
    });
  };

  saved = (todoItem, updatedText) => {
    this.props.onUpdateTodo({
      todoId: todoItem.todoId,
      text: updatedText,
      completed: false,
      userId: todoItem.userId
    });
  };

  render() {
    const todos = this.props.todos.map(todoItem => (
      <TodoItem
        key={todoItem.todoId}
        id={todoItem.todoId}
        text={todoItem.text}
        status={todoItem.completed}
        complete={() => this.completeTodo(todoItem)}
        undoComplete={() => this.undoCompleteTodo(todoItem)}
        deleteTodo={() => this.props.onDeleteTodo(todoItem.todoId)}
        saved={updatedText => this.saved(todoItem, updatedText)}
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
                  this.props.onCreateTodo("New Todo", "1");
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
    onCreateTodo: (text, userId) =>
      dispatch(actionCreators.createTodo(text, userId)),
    onFetchTodos: () => dispatch(actionCreators.fetchTodos()),
    onUpdateTodo: todoData => dispatch(actionCreators.updateTodo(todoData)),
    onDeleteTodo: todoId => dispatch(actionCreators.deleteTodo(todoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
