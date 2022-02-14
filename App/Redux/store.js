import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import Tasksreducer from "./Tasks/TasksReducer";
import ThemeReducer from "./ThemeReducer/ThemeReducers";


const reducers = combineReducers({taskState:Tasksreducer, themeState:ThemeReducer});
const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk),));
export default store;