import { async_load, async_store } from "../../Utils/AsyncStore";
import { colors } from "../../Utils/Colors";
import { ActionsTypes } from "./ActionsTypes";

const goDark = (theme) => ({
  type: ActionsTypes.GO_DARK,
  payload: theme,
});
const goLight = (theme) => ({
  type: ActionsTypes.GO_LIGHT,
  payload: theme,
});

export const loadTheme = (theme) => ({
  type: ActionsTypes.LOAD_THEME,
  payload: theme,
});

export const goDarkFunc = () => {
  return (dispatch) => {
    async_store("theme", colors.dark);
    dispatch(goDark(colors.dark));
  };
};

export const goLightFunc = () => {
  return (dispatch) => {
    async_store("theme", colors.light);
    dispatch(goLight(colors.light));
  };
};

export const loadThemeFunc = () => {
  return (dispatch) => {
    const result = async_load("theme");
    if (result) {
      result.then((response) => {
        dispatch(loadTheme(JSON.parse(response)));
      });
    } else {
      result = colors.dark;
      dispatch(loadTheme(result));
    }
  };
};
