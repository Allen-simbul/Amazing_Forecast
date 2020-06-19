import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import forecastReducer from './forecast-reducer';
import locationsReducer from './locations-reducer';
import searchtermReducer from './searchterm-reducer';

export default combineReducers({
  currentForecast: forecastReducer,
  matchedLocations: locationsReducer,
  searchterm: searchtermReducer,
  form: formReducer,
});
