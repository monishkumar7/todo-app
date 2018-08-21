import * as actionTypes from "./actionTypes";

export const completeTodo = todoId => {
  return {
    type: actionTypes.COMPLETE_TODO,
    todoId: todoId
  };
};

export const undoCompleteTodo = todoId => {
  return {
    type: actionTypes.UNDO_COMPLETE_TODO,
    todoId: todoId
  };
};

export const createTodo = (userId, text) => {
  return {
    type: actionTypes.CREATE_TODO,
    userId: userId,
    text: text
  };
};

export const deleteTodo = todoId => {
  return {
    type: actionTypes.DELETE_TODO,
    todoId: todoId
  };
};
