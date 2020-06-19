import axios from 'axios';
import history from '../history';
import {
  FETCH_FORECAST,
  CITY_NOT_FOUND,
  FETCH_LOCATIONS,
  SEARCH_TERM,
} from './types';

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

export const getLocations = (location) => {
  return async (dispatch) => {
    const matched_locations = await axios.get(`/api/search_result/${location}`);
    dispatch({ type: FETCH_LOCATIONS, payload: matched_locations.data });
    history.push(`/searchresults/${location}`);
  };
};

export const searchTerm = (searchTerm) => {
  return async (dispatch) => {
    const term = await axios.post('/api/search_result/');
    const current_searchTerm = await axios.patch(
      `/api/search_result/update/${searchTerm}`
    );
    console.log(current_searchTerm.data);
    dispatch({ type: SEARCH_TERM, payload: current_searchTerm.data });
  };
};
