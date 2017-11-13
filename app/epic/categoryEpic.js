import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {API} from '../utilities/API';
import {
  FETCH_CATEGORIES_REQUEST,
  FetchCategoriesResponse
} from '../actions';

const fetchCategories = action$ => {
  return action$
    .ofType(FETCH_CATEGORIES_REQUEST)
    .switchMap(() => {
      return ajax({
        'url': API.FETCH_CATEGORIES,
        'crossDomain': true
      }).map(resp => {
        return FetchCategoriesResponse(resp.response);
      });
    });
};


export const categoryEpic = [
  fetchCategories
];
