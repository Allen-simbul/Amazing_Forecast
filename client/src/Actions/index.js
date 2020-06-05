import axios from 'axios';
import history from '../history';
import { FETCH_FORECAST, CITY_NOT_FOUND } from './types';

export const getForecast = (city) => {
  return async (dispatch) => {
    try {
      console.log(city);
      const response = await axios.get(`/api/forecast/${city}`);
      console.log(response.data);

      if (response.data.cod === 200) {
        dispatch({ type: FETCH_FORECAST, payload: response.data });
        history.push(`/forecast/${city}`);
      } else if (response.data.cod === '404') {
        dispatch({ type: CITY_NOT_FOUND, payload: response.data });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
