import axios from 'axios'
import  {GET_COUNTRIES, GET_BY_NAME }  from './action_types'


export function getCountries() {
    return async function(dispatch) {
        const response = await axios('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
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