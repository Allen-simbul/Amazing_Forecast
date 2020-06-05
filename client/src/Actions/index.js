import axios from 'axios';
import history from '../history';

export const getForecast = (city) => {
  return async (dispatch) => {
    try {
      console.log(city);
      const response = await axios.get(`/api/forecast/${city}`);
      console.log(response.data);
      dispatch({ type: 'FETCH_FORECAST', payload: response.data });
      history.push(`/forecast/${city}`);
    } catch (e) {
      console.log(e);
    }
  };
};
