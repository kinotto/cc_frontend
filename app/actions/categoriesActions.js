import {makeActionCreator} from './makeActionCreator';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_RESPONSE = 'FETCH_CATEGORIES_RESPONSE';

export const FetchCategoriesRequest = makeActionCreator(FETCH_CATEGORIES_REQUEST);
export const FetchCategoriesResponse = makeActionCreator(FETCH_CATEGORIES_RESPONSE);
