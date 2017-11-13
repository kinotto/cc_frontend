import {makeActionCreator} from './makeActionCreator';

export const FETCH_IDEAS_REQUEST = 'FETCH_IDEAS_REQUEST';
export const FETCH_IDEAS_RESPONSE = 'FETCH_IDEAS_RESPONSE';
export const FILTER_IDEAS_REQUEST = 'FILTER_IDEAS_REQUEST';
export const FILTER_IDEAS_RESPONSE = 'FILTER_IDEAS_RESPONSE';
export const FILTER_IDEAS_BY_CATEGORY_REQUEST = 'FILTER_IDEAS_BY_CATEGORY_REQUEST';

export const FetchIdeasRequest = makeActionCreator(FETCH_IDEAS_REQUEST);
export const FetchIdeasResponse = makeActionCreator(FETCH_IDEAS_RESPONSE);
export const FilterIdeasRequest = makeActionCreator(FILTER_IDEAS_REQUEST);
export const FilterIdeasResponse = makeActionCreator(FILTER_IDEAS_RESPONSE);
export const FilterIdeasByCategoryRequest = makeActionCreator(FILTER_IDEAS_BY_CATEGORY_REQUEST);
