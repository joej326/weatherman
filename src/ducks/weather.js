import { buildURL, formatWeatherData } from '../utils/weatherUtils';
import axios from 'axios';

const initialState = {
  error: false,
  loading: false,
  search: true,
  weather: {}
};

export function setWeather(location){
  return {
    type: SET_WEATHER,
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a6c45a3b8b1f377d5bcdc4ecde68b577`)
  }
}

const RESET = "RESET";
const SET_WEATHER = 'SET_WEATHER';

export default function weather( state = initialState, action ) {
  switch ( action.type ) {
    case SET_WEATHER + "_PENDING":
      return {
        error: false,
        loading: true,
        search: false,
        weather: {}
      };
    case SET_WEATHER + "_FULFILLED":
      return {
        error: false,
        loading: false,
        search: false,
        weather: action.payload
      };
    case SET_WEATHER + "_REJECTED":
      return {
        error: true,
        loading: false,
        search: false,
        weather: {}
      };

    case RESET: return initialState;
    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}
