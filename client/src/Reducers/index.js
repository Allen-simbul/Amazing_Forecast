import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import forecastReducer from './forecast-reducer';

export default combineReducers({
  currentForecast: forecastReducer,
  form: formReducer,
});
