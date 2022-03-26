import { CockTailActionTypes } from "./CockTailActionTypes";

const INITIAL_STATE = {
  HomeCocktails: [],
  Categories: [],
  Ingredients: [],
  Alcoholics: [],
  SeachCocktails: [],
  Favorites: [],
  loading: {
    homeLoading: false,
    categoryListLoading: false,
    ingredientListLoading: false,
    alcoholicListLoading: false,
    searchLoading: false,
  },
  errors: {
    homeError: false,
    categoryListError: false,
    ingredientListError: false,
    alcoholicListError: false,
    searchError: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CockTailActionTypes.START_HOMECOCKTAILS_LOAD:
      return { ...state, loading: { ...state.loading, homeLoading: true } };
    case CockTailActionTypes.START_HOMECOCKTAILS_LOAD_FAIL:
      return {
        ...state,
        loading: { ...state.loading, homeLoading: false },
        errors: { ...state.errors, homeError: true },
      };
    case CockTailActionTypes.START_HOMECOCKTAILS_LOAD_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, homeLoading: false },
        errors: { ...state.errors, homeError: false },
        HomeCocktails: action.payload,
      };

    //favorites
    case CockTailActionTypes.LOAD_FAVORITES:
      return { ...state, Favorites: action.payload };
    case CockTailActionTypes.ADD_FAVORITES:
      return {
        ...state,
        Favorites: action.payload,
      };
    case CockTailActionTypes.DELETE_FAVORITES:
      return {
        ...state,
        Favorites: action.payload,
      };

    //category list
    case CockTailActionTypes.START_CATEGORY_LOAD:
      return {
        ...state,
        loading: { ...state.loading, categoryListLoading: true },
      };
    case CockTailActionTypes.START_CATEGORY_LOAD_FAIL:
      return {
        ...state,
        loading: { ...state.loading, categoryListLoading: false },
        errors: { ...state.errors, categoryListError: true },
      };
    case CockTailActionTypes.START_CATEGORY_LOAD_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, categoryListLoading: false },
        errors: { ...state.errors, categoryListError: false },
        Categories: action.payload,
      };

    //ingredients list
    case CockTailActionTypes.START_INGREDIENTS_LOAD:
      return {
        ...state,
        loading: { ...state.loading, ingredientListLoading: true },
      };
    case CockTailActionTypes.START_INGREDIENTS_LOAD_FAIL:
      return {
        ...state,
        loading: { ...state.loading, ingredientListLoading: false },
        errors: { ...state.errors, ingredientListError: true },
      };
    case CockTailActionTypes.START_INGREDIENTS_LOAD_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, ingredientListLoading: false },
        errors: { ...state.errors, ingredientListError: false },
        Ingredients: action.payload,
      };

    //alcohol list
    case CockTailActionTypes.START_ALCOHOLIC_LOAD:
      return {
        ...state,
        loading: { ...state.loading, alcoholicListLoading: true },
      };
    case CockTailActionTypes.START_ALCOHOLIC_LOAD_FAIL:
      return {
        ...state,
        loading: { ...state.loading, alcoholicListLoading: false },
        errors: { ...state.errors, alcoholicListError: true },
      };
    case CockTailActionTypes.START_ALCOHOLIC_LOAD_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, alcoholicListLoading: false },
        errors: { ...state.errors, alcoholicListError: false },
        Alcoholics: action.payload,
      };
    default:
      return state;
  }
};
