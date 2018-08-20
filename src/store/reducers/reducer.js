import * as actionTypes from "../actions/actionTypes";

const initialState = {
  helloText: "Hello World"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAMPLE_ACTION:
      return {
        ...state,
        helloText: "Clicked"
      };
    default:
      return state;
  }
};

export default reducer;
