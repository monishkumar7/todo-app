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
