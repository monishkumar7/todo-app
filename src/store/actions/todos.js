import axios from "axios";

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

export const createTodoAPI = (text, userId) => {
  return dispatch => {
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
        const todoId = response.data.name.substring(
          response.data.name.lastIndexOf("/") + 1
        );
        const text = response.data.fields.text.stringValue;
        console.log(todoId);
        console.log(text);
        dispatch(createTodo(todoId, text, 1));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const createTodo = (todoId, text, userId) => {
  return {
    type: actionTypes.CREATE_TODO,
    todoId: todoId,
    text: text,
    userId: userId
  };
};

export const deleteTodoAPI = todoId => {
  return dispatch => {
    axios
      .delete(
        "https://firestore.googleapis.com/v1beta1/projects/todo-app-7/databases/(default)/documents/todos/" +
          todoId
      )
      .then(response => {
        console.log(response);
        dispatch(deleteTodo(todoId));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteTodo = todoId => {
  return {
    type: actionTypes.DELETE_TODO,
    todoId: todoId
  };
};

export const fetchTodosAPI = () => {
  return dispatch => {
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
      });
  };
};

export const fetchTodosSuccess = todoData => {
  return {
    type: actionTypes.FETCH_TODO_SUCCESS,
    todoData: todoData
  };
};
