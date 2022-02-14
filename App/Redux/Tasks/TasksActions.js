import { async_load } from "../../Utils/AsyncStore";

const { ActionTypes } = require("./TasksActionTypes");

const loadTasks = () => ({
  type: ActionTypes.LOAD_TASKS,
});
const loadTaskStart = () => ({
  type: ActionTypes.TASK_LOAD_START,
});
const loadTaskSuccess = (tasks) => ({
  type: ActionTypes.TASK_LOAD_SUCCESS,
  payload: tasks,
});
const loadTaskfail = (tasks) => ({
  type: ActionTypes.TASK_LOAD_FAIL,
  payload: [],
});

const addTask = (task) => ({
  type: ActionTypes.ADD_TASK,
  payload: task,
});
const deleteTask = (id) => ({
  type: ActionTypes.DELETE_TASK,
  payload: id,
});
const updateTask = (id, task) => ({
  type: ActionTypes.UPDATE_TASK,
  payload: {
    id,
    task,
  },
});

//load task
export const loadTasksFunc = () => {
  return (dispatch) => {
    dispatch(loadTaskStart);
    const result = async_load("tasks");
    if (result) {
      dispatch(loadTaskSuccess(result));
      return;
    }
    dispatch(loadTaskfail);
  };
};

//addtask
export const addTaskFunc = (task) => {
  return (dispatch) => {
    dispatch(addTask(task));
  };
};

//deleteTaskFunc
export const deleteTaskFunc = (id) => {
  return (dispatch) => {
    dispatch(deleteTask(id));
  };
};
//updateTaskFunc
export const updateTaskFunc = (id,task) => {
  return (dispatch) => {
    dispatch(updateTask(id, task));
  };
};