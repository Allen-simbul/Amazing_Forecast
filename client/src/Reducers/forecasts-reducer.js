import { FETCH_FORECASTS } from '../Actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FORECASTS:
      return action.payload;
    default:
      return state;
  }
}
