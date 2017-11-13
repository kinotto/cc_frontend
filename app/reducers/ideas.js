import {Map, List} from 'immutable';
import {
  FETCH_IDEAS_RESPONSE,
  FILTER_IDEAS_RESPONSE,
  FETCH_CATEGORIES_RESPONSE
} from '../actions';

const initState = () => {
  return Map({
    'all': List(),
    'filtered': List(),
    'categories': List()
  });
};
export const ideas = ((state = initState(), action) => {
  switch (action.type) {
  case FETCH_IDEAS_RESPONSE: {
    return state
      .set('all', List(action.payload));
  }
  case FILTER_IDEAS_RESPONSE: {
    return state
      .set('filtered', List(action.payload));
  }
  case FETCH_CATEGORIES_RESPONSE: {
    return state
      .set('categories', List(action.payload));
  }
  default:
    return state;
  }
});
