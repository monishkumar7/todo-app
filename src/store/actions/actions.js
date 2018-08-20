import * as actionTypes from "./actionTypes";

export const sampleActionAsync = () => {
  return dispatch => {
    setTimeout(() => {
      console.log("Async Action");
      dispatch(sampleAction());
    }, 1000);
  };
};

export const sampleAction = () => {
  return {
    type: actionTypes.SAMPLE_ACTION
  };
};
