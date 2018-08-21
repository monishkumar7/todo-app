import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      taskId: "1",
      userId: "1",
      completed: false,
      text: "My First Todo"
    },
    {
      taskId: "2",
      userId: "1",
      completed: false,
      text: "Style this up"
    }
  ],
  userId: "1"
};

const completeTask = (state, action) => {
  return {
    ...state,
    todos: state.todos.map(todoItem => {
      if (todoItem.taskId === action.taskId) {
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

const undoCompleteTask = (state, action) => {
  return {
    ...state,
    todos: state.todos.map(todoItem => {
      if (todoItem.taskId === action.taskId) {
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
    case actionTypes.COMPLETE_TASK:
      return completeTask(state, action);
    case actionTypes.UNDO_COMPLETE_TASK:
      return undoCompleteTask(state, action);
    default:
      return state;
  }
};

export default reducer;
