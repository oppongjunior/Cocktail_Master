import { CockTailActionTypes } from "./CockTailActionTypes";
import axios from "axios";

//start home cocktail load action
const homeCockTailsLoad = () => ({
  type: CockTailActionTypes.START_HOMECOCKTAILS_LOAD,
});
//start category cocktail load action
const categoryCocktailsLoads = (payload) => ({
  type: CockTailActionTypes.START_CATEGORYCOCKTAILS_LOAD,
  payload: payload,
});

//start ingredient cocktail load action
const ingredientsCocktailsLoad = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTSCOCKTAILS_LOAD,
  payload: payload,
});
//start alcoholic cocktail load action
const alcoholCocktailsLoad = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLICCOCKTAILS_LOAD,
  payload: payload,
});
//start search cocktail load action
const searchCocktailsLoad = (payload) => ({
  type: CockTailActionTypes.START_SEARCHCOCKTAILS_LOAD,
  payload: payload,
});
//start alcoholic list load
const alcoholLoad = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLIC_LOAD,
  payload: payload,
});

//category list load
const categoryLoad = () => ({
  type: CockTailActionTypes.START_CATEGORY_LOAD,
});
//ingredient list load
const IngredientLoad = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTS_LOAD,
  payload: payload,
});

/* success */
//start home cocktail load success action
const homeCockTailSuccess = (payload) => ({
  type: CockTailActionTypes.START_HOMECOCKTAILS_LOAD_SUCCESS,
  payload: payload,
});
//category cocktail success
const categoryCockTailSuccess = (payload) => ({
  type: CockTailActionTypes.START_CATEGORYCOCKTAILS_LOAD_SUCCESS,
  payload: payload,
});
//ingredient cocktail success
const ingredientCockTailSuccess = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTSCOCKTAILS_LOAD_SUCCESS,
  payload: payload,
});
//alcohol cocktail success
const alcoholCockTailSuccess = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLICCOCKTAILS_LOAD_SUCCESS,
  payload: payload,
});
//search cocktail success
const searchCocktailSuccess = (payload) => ({
  type: CockTailActionTypes.START_SEARCHCOCKTAILS_LOAD_SUCCESS,
  payload: payload,
});
//category list success
const categorySuccess = (payload) => ({
  type: CockTailActionTypes.START_CATEGORY_LOAD_SUCCESS,
  payload: payload,
});
//Ingredients list success
const ingredientSuccess = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTS_LOAD_SUCCESS,
  payload: payload,
});
//alcohol list success
const alcoholSuccess = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLIC_LOAD_SUCCESS,
  payload: payload,
});

/* Fails */
//start home cocktail load fail action
const homeCockTailFail = () => ({
  type: CockTailActionTypes.START_HOMECOCKTAILS_LOAD_FAIL,
});
//category cocktail fail
const categoryCockTailFail = (payload) => ({
  type: CockTailActionTypes.START_CATEGORYCOCKTAILS_LOAD_FAIL,
  payload: payload,
});
//ingredient cocktail fail
const ingredientCockTailFail = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTSCOCKTAILS_LOAD_FAIL,
  payload: payload,
});
//alcohol cocktail fail
const alcoholCockTailFail = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLICCOCKTAILS_LOAD_FAIL,
  payload: payload,
});
//search cocktail fail
const searchCocktailFail = (payload) => ({
  type: CockTailActionTypes.START_SEARCHCOCKTAILS_LOAD_FAIL,
  payload: payload,
});
//category list fail
const categoryFail = () => ({
  type: CockTailActionTypes.START_CATEGORY_LOAD_FAIL,
});
//Ingredients list fail
const ingredientFail = (payload) => ({
  type: CockTailActionTypes.START_INGREDIENTS_LOAD_FAIL,
  payload: payload,
});
//alcohol list fail
const alcoholFail = (payload) => ({
  type: CockTailActionTypes.START_ALCOHOLIC_LOAD_FAIL,
  payload: payload,
});

//start home cocktail load fail action
const start_load_homecCockTailFail = (payload) => ({
  type: CockTailActionTypes.START_HOMECOCKTAILS_LOAD_FAIL,
  payload: payload,
});

//load home cocktail
export const loadHomeCocktailFunc = (url) => {
  return async (dispatch) => {
    dispatch(homeCockTailsLoad());
    try {
      let data = await axios.get(url);
      dispatch(homeCockTailSuccess(data.data.drinks));
    } catch (error) {
      dispatch(homeCockTailFail());
    }
  };
};

//load categorycocktail
export const loadcategoryCocktailFunc = (url) => {
  return async (dispatch) => {
    dispatch(categoryCocktailsLoads());
    try {
      let data = await axios.get(url);
      dispatch(categoryCockTailSuccess(data.data.drinks));
    } catch (error) {
      dispatch(categoryCockTailFail());
    }
  };
};


//load category list
export const loadcategoryListFunc = (url) => {
  return async (dispatch) => {
    dispatch(categoryLoad());
    try {
      let data = await axios.get(url);
      dispatch(categorySuccess(data.data.drinks));
    } catch (error) {
      dispatch(categoryFail());
    }
  };
};
//load ingredient list
export const loadIngredientListFunc = (url) => {
  return async (dispatch) => {
    dispatch(IngredientLoad());
    try {
      let data = await axios.get(url);
      let newData = data.data.drinks.map((item) => {
        return {
          strCategory: item.strIngredient1,
        };
      });
      dispatch(ingredientSuccess(newData));
    } catch (error) {
      dispatch(ingredientFail());
    }
  };
};
//load alcohol list
export const loadAlcoholListFunc = (url) => {
  return async (dispatch) => {
    dispatch(alcoholLoad());
    try {
      let data = await axios.get(url);
      let newData = data.data.drinks.map((item) => {
        return {
          strCategory: item.strAlcoholic,
        };
      });
      dispatch(alcoholSuccess(newData));
    } catch (error) {
      dispatch(alcoholFail());
    }
  };
};
