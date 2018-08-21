import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      todoId: "1",
      userId: "1",
      completed: false,
      text: "My First Todo"
    },
    {
      todoId: "2",
      userId: "1",
      completed: false,
      text: "Style this up"
    }
  ],
  userId: "1"
};

const completeTodo = (state, action) => {
  return {
    ...state,
    todos: state.todos.map(todoItem => {
      if (todoItem.todoId === action.todoId) {
        return {
          ...todoItem,
          completed: true
        };
      } else {
        return todoItem;
      }
    })
  };
};

const undoCompleteTodo = (state, action) => {
  return {
    ...state,
    todos: state.todos.map(todoItem => {
      if (todoItem.todoId === action.todoId) {
        return {
          ...todoItem,
          completed: false
        };
      } else {
        return todoItem;
      }
    })
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPLETE_TODO:
      return completeTodo(state, action);
    case actionTypes.UNDO_COMPLETE_TODO:
      return undoCompleteTodo(state, action);
    default:
      return state;
  }
};

export default reducer;
