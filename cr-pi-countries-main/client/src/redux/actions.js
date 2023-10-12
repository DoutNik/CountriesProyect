import axios from 'axios'
import  {GET_COUNTRIES, GET_COUNTRY_ACTIVITY, GET_ACTIVITIES, GET_BY_NAME, CREATE_ACTIVITY, SET_SORT_BY, SET_FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, RESET}  from './action_types'


export function getCountries() {
    return async function(dispatch) {
        const response = await axios('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
} 

export function getActivities() {
  return async function(dispatch) {
    const response = await axios('http://localhost:3001/tourismActivities')
    return dispatch({
      type: GET_ACTIVITIES,
      payload: response.data
    })
  }
}

export function getCountryByName(name) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/countries/name?name=${name}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: response.data
        })
    }
} 

export function createActivity(activity) {
    return async (dispatch) => {
      try {
        const result = await axios.post(
          "http://localhost:3001/tourismActivities",
          activity
        );
  
        dispatch({
          type: CREATE_ACTIVITY,
          payload: result.data,
        });
      } catch (e) {
        console.log(e);
      }
    };
  }

  export function getCountryActivity(countryActivity) {
    return async (dispatch) => {
        const result = await axios(`http://localhost:3001/countries/${ID}/activities`)
        return dispatch({
          type: GET_COUNTRY_ACTIVITY,
          payload: result.data
        })
      }
    }


  export function setSortBy(order) {
    return {
      type: SET_SORT_BY,
      payload: order,
    }
  };

  export function setFilterByContinent(continent) {
    return {
    type: SET_FILTER_BY_CONTINENT,
    payload: continent,
    }
  };

  export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}

  export function reset() {
    return {
      type: RESET,
    };
  }