import { ActionTypes } from "./TasksActionTypes";

const initState = {
  tasks: [],
  taskLoading: false,
  focusing: true,
};

const Tasksreducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.TASK_LOAD_START:
      return { ...state, taskLoading: true };
    case ActionTypes.UPDATE_FOCUSING:
      return { ...state, focusing:action.payload };
    case ActionTypes.TASK_LOAD_SUCCESS:
      return { ...state, task: action.payload, taskLoading: false };
    case ActionTypes.TASK_LOAD_FAIL:
      return { ...state, taskLoading: false };
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.key !== action.payload),
      };
    case ActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.key === action.payload.id) {
            return action.payload.task;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default Tasksreducer;
