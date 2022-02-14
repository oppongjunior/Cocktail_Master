import { ActionsTypes } from "./ActionsTypes";

const initState = {
  theme: {
    body: "",
    title: "",
    background: "",
    dark_mode:true
  },
};

const ThemeReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionsTypes.LOAD_THEME:
      return {...state,theme:action.payload}
    case ActionsTypes.GO_LIGHT:
        return {...state,theme:action.payload}
    case ActionsTypes.GO_DARK:
        return {...state,theme:action.payload}
    default:
      return state;
  }
};

export default ThemeReducer;
