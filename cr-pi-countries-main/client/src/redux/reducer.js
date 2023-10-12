import {
  GET_COUNTRIES,
  GET_BY_NAME,
  CREATE_ACTIVITY,
  SET_FILTER_BY_CONTINENT,
  SET_SORT_BY,
  RESET,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES,
  GET_COUNTRY_ACTIVITY,
} from "./action_types";

let initialState = { allCountries: [], countriesCopy: [], allActivities: [], countryActivity: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countriesCopy: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_COUNTRY_ACTIVITY:
      return {
        ...state,
        countryActivity: action.payload
      }

    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };

    case SET_SORT_BY:
      let sorted;
      if (action.payload === "A ~ Z") {
        sorted = state.allCountries.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z ~ A") {
        sorted = state.allCountries.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (action.payload === "populationAsc") {
        sorted = state.allCountries.sort((a, b) => a.population - b.population);
      } else if (action.payload === "populationDesc") {
        sorted = state.allCountries.sort((a, b) => b.population - a.population);
      }
      return {
        ...state,
        allCountries: [...sorted],
      };

    case SET_FILTER_BY_CONTINENT:
      const countries = state.countriesCopy;
      const resultFilteredByContinent = countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        allCountries: resultFilteredByContinent,
      };

      case FILTER_BY_ACTIVITY:
        const toFilter = state.countriesCopy
  
        return {
          ...state,
          allCountries: toFilter.filter((country) => {
            return country.TourismActivities.some(
              (activity) => activity.name === action.payload
            );
          }),
        };

    case RESET:
      return {
        ...state,
        allCountries: state.countriesCopy,
      };

    default:
      return state;
  }
}

export default rootReducer;
