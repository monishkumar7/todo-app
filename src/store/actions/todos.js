import axios from "axios";

import * as actionTypes from "./actionTypes";

export const createTodoStart = () => {
  return {
    type: actionTypes.CREATE_TODO_START
  };
};

export const createTodo = (text, userId) => {
  return dispatch => {
    dispatch(createTodoStart());
    const data = {
      fields: {
        userId: {
          stringValue: userId
        },
        text: {
          stringValue: text
        },
        completed: {
          booleanValue: false
        }
      }
    };
    axios
      .post(
        "https://firestore.googleapis.com/v1beta1/projects/todo-app-7/databases/(default)/documents/todos",
        data
      )
      .then(response => {
        console.log(response);
        dispatch(createTodoSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(createTodoFail());
      });
  };
};

export const createTodoSuccess = todoData => {
  return {
    type: actionTypes.CREATE_TODO_SUCCESS,
    todoData: todoData
  };
};

export const createTodoFail = () => {
  return {
    type: actionTypes.CREATE_TODO_FAIL
  };
};

export const fetchTodosStart = () => {
  return {
    type: actionTypes.FETCH_TODOS_START
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosStart());
    axios
      .get(
        "https://firestore.googleapis.com/v1beta1/projects/todo-app-7/databases/(default)/documents/todos"
      )
      .then(response => {
        console.log(response);
        dispatch(fetchTodosSuccess(response.data.documents));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchTodosFail());
      });
  };
};

export const fetchTodosSuccess = todosData => {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    todosData: todosData
  };
};

export const fetchTodosFail = () => {
  return {
    type: actionTypes.FETCH_TODOS_FAIL
  };
};

export const updateTodoStart = () => {
  return {
    type: actionTypes.UPDATE_TODO_START
  };
};

export const updateTodo = updateObject => {
  return dispatch => {
    dispatch(updateTodoStart());
    const data = {
      fields: {
        userId: {
          stringValue: updateObject.userId
        },
        text: {
          stringValue: updateObject.text
        },
        completed: {
          booleanValue: updateObject.completed
        }
      }
    };
    axios
      .patch(
        "https://firestore.googleapis.com/v1beta1/projects/todo-app-7/databases/(default)/documents/todos/" +
          updateObject.todoId,
        data
      )
      .then(response => {
        console.log(response);
        dispatch(updateTodoSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(updateTodoFail());
      });
  };
};

export const updateTodoSuccess = todoData => {
  return {
    type: actionTypes.UPDATE_TODO_SUCCESS,
    todoData: todoData
  };
};

export const updateTodoFail = () => {
  return {
    type: actionTypes.UPDATE_TODO_FAIL
  };
};

export const deleteTodoStart = () => {
  return {
    type: actionTypes.DELETE_TODO_START
  };
};

export const deleteTodo = todoId => {
  return dispatch => {
    dispatch(deleteTodoStart());
    axios
      .delete(
        "https://firestore.googleapis.com/v1beta1/projects/todo-app-7/databases/(default)/documents/todos/" +
          todoId
      )
      .then(response => {
        console.log(response);
        dispatch(deleteTodoSuccess(todoId));
      })
      .catch(error => {
        console.log(error);
        dispatch(deleteTodoFail());
      });
  };
};

export const deleteTodoSuccess = todoId => {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    todoId: todoId
  };
};

export const deleteTodoFail = () => {
  return {
    type: actionTypes.DELETE_TODO_FAIL
  };
};
