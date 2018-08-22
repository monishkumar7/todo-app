import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [],
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

const createTodo = (state, action) => {
  return {
    ...state,
    todos: state.todos.concat({
      todoId: action.todoId,
      text: action.text,
      userId: action.userId,
      completed: false
    })
  };
};

const deleteTodo = (state, action) => {
  let newArray = [];
  state.todos.forEach(todoItem => {
    if (todoItem.todoId !== action.todoId) newArray.push(todoItem);
  });
  return {
    ...state,
    todos: newArray
  };
};

const fetchTodoSuccess = (state, action) => {
  const newArray = [];
  action.todoData.forEach(incomingItem => {
    newArray.push({
      todoId: incomingItem.name.substring(
        incomingItem.name.lastIndexOf("/") + 1
      ),
      text: incomingItem.fields.text.stringValue,
      userId: incomingItem.fields.userId.stringValue,
      completed: incomingItem.fields.completed.booleanValue
    });
  });
  return {
    ...state,
    todos: newArray
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPLETE_TODO:
      return completeTodo(state, action);
    case actionTypes.UNDO_COMPLETE_TODO:
      return undoCompleteTodo(state, action);
    case actionTypes.CREATE_TODO:
      return createTodo(state, action);
    case actionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    case actionTypes.FETCH_TODO_SUCCESS:
      return fetchTodoSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
