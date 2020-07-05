import { FETCH_LOCATIONS } from '../Actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
}
