import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";
import * as actionCreators from "../../store/actions";

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
      />
    ));
    return todos;
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
      dispatch(actionCreators.undoCompleteTodo(todoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
