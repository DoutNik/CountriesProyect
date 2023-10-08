import { GET_COUNTRIES, GET_BY_NAME } from "./action_types";

let initialState = { allCountries: [], countriesCopy: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countriesCopy: action.payload
      };
      case GET_BY_NAME:
        return {
          ...state,
          allCountries: action.payload
        }
    default:
      return state;
  }
}

export default rootReducer;
