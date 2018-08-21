import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";
import * as actionCreators from "../../store/actions";

class Todos extends Component {
  render() {
    const todos = this.props.todos.map(todoItem => (
      <TodoItem
        key={todoItem.taskId}
        id={todoItem.taskId}
        text={todoItem.text}
        status={todoItem.completed}
        complete={() => this.props.onCompleteTask(todoItem.taskId)}
        undoComplete={() => this.props.onUndoCompleteTask(todoItem.taskId)}
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
    onCompleteTask: taskId => dispatch(actionCreators.completeTask(taskId)),
    onUndoCompleteTask: taskId =>
      dispatch(actionCreators.undoCompleteTask(taskId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
