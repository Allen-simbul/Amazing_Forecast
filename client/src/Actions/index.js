import axios from 'axios';
import history from '../history';
import {
  FETCH_FORECAST,
  CITY_NOT_FOUND,
  FETCH_LOCATIONS,
  FETCH_FORECASTS,
  SEARCH_TERM,
} from './types';

export const getChosenForecast = (locationID) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/forecast/${locationID}`);
    dispatch({ type: FETCH_FORECAST, payload: response.data });
  };
};

export const getLocations = (location) => {
  return async (dispatch) => {
    const matched_locations = await axios.get(`/api/search_result/${location}`);
    dispatch({ type: FETCH_LOCATIONS, payload: matched_locations.data });
  };
};

export const getForecasts = (locations) => {
  return async (dispatch) => {
    const locations_id = locations.map((location) => {
      return location.id;
    });
    const matched_forecasts = await Promise.all(
      locations_id.map(async (location) => {
        const response = await axios.get(
          `/api/forecast/${JSON.stringify(location)}`
        );
        return response.data;
      })
    );
    dispatch({ type: FETCH_FORECASTS, payload: matched_forecasts });
  };
};

export const searchTerm = (searchTerm) => {
  return async (dispatch) => {
    const term = await axios.post('/api/search_result/');
    const current_searchTerm = await axios.patch(
      `/api/search_result/update_term/${searchTerm}`
    );
    dispatch({ type: SEARCH_TERM, payload: current_searchTerm.data });
    history.push(`/searchresults?location=${searchTerm}`);
  };
};

export const saveChosenLocation = (locationID) => {
  return async (dispatch) => {
    const current_searchTerm = await axios.patch(
      `/api/search_result/update_id/${locationID}`
    );
    dispatch({ type: SEARCH_TERM, payload: current_searchTerm.data });
  };
};

export const getCurrentSearchTerm = () => {
  return async (dispatch) => {
    const current_searchTerm = await axios.get(
      '/api/search_result/current/search_term/'
    );
    dispatch({ type: SEARCH_TERM, payload: current_searchTerm.data });
  };
};
