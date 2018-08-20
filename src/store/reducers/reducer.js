import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      id: "1",
      userId: "1",
      completed: false,
      text: "My First Todo"
    },
    {
      id: "2",
      userId: "1",
      completed: false,
      text: "Style this up"
    }
  ],
  userId: "1"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
