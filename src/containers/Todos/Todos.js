import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";

class Todos extends Component {
  render() {
    const todos = this.props.todos.map(todoItem => (
      <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />
    ));
    return todos;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todos);
