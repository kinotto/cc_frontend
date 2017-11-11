import {List} from 'immutable';
import {FETCH_IDEAS_RESPONSE} from '../actions';

export const ideas = (state = List(), action) => {
  switch (action.type) {
  case FETCH_IDEAS_RESPONSE: {
    return List(action.payload);
  }
  default:
    return state;
  }
};
