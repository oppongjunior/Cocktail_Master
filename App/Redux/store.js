import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import ThemeReducer from "./ThemeReducer/ThemeReducers";
import CockTailReducer from "./CockTailReducer/CockTailReducer";


const reducers = combineReducers({themeState:ThemeReducer,cockTailState:CockTailReducer});
const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk),));
export default store;