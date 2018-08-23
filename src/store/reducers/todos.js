import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [],
  userId: "1"
};

const createTodo = (state, action) => {
  const todoId = action.todoData.name.substring(
    action.todoData.name.lastIndexOf("/") + 1
  );
  return {
    ...state,
    todos: state.todos.concat({
      todoId: todoId,
      text: action.todoData.fields.text.stringValue,
      userId: action.todoData.fields.userId.stringValue,
      completed: action.todoData.fields.completed.booleanValue
    })
  };
};

const fetchTodos = (state, action) => {
  const newArray = [];
  action.todosData.forEach(incomingItem => {
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

const updateTodo = (state, action) => {
  const todoId = action.todoData.name.substring(
    action.todoData.name.lastIndexOf("/") + 1
  );
  return {
    ...state,
    todos: state.todos.map(todoItem => {
      if (todoItem.todoId === todoId) {
        return {
          todoId: todoId,
          text: action.todoData.fields.text.stringValue,
          userId: action.todoData.fields.userId.stringValue,
          completed: action.todoData.fields.completed.booleanValue
        };
      } else {
        return todoItem;
      }
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO_START:
      return state;
    case actionTypes.CREATE_TODO_SUCCESS:
      return createTodo(state, action);
    case actionTypes.CREATE_TODO_FAIL:
      return state;
    case actionTypes.FETCH_TODOS_START:
      return state;
    case actionTypes.FETCH_TODOS_SUCCESS:
      return fetchTodos(state, action);
    case actionTypes.FETCH_TODOS_FAIL:
      return state;
    case actionTypes.UPDATE_TODO_START:
      return state;
    case actionTypes.UPDATE_TODO_SUCCESS:
      return updateTodo(state, action);
    case actionTypes.UPDATE_TODO_FAIL:
      return state;
    case actionTypes.DELETE_TODO_START:
      return state;
    case actionTypes.DELETE_TODO_SUCCESS:
      return deleteTodo(state, action);
    case actionTypes.DELETE_TODO_FAIL:
      return state;
    default:
      return state;
  }
};

export default reducer;
