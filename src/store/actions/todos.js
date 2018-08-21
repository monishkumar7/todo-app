import * as actionTypes from "./actionTypes";

export const completeTask = taskId => {
  return {
    type: actionTypes.COMPLETE_TASK,
    taskId: taskId
  };
};

export const undoCompleteTask = taskId => {
  return {
    type: actionTypes.UNDO_COMPLETE_TASK,
    taskId: taskId
  };
};
