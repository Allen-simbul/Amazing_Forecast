import { FETCH_FORECAST } from '../Actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return action.payload;
    default:
      return state;
  }
}
