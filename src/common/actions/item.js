import request from 'axios';

export const ITEMS_GET = 'ITEMS_GET';
export const ITEMS_GET_REQUEST = 'ITEMS_GET_REQUEST';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_FAILURE = 'ITEMS_GET_FAILURE';

export function fetchItems() {
  return {
    type: ITEMS_GET,
    promise: request.get('/api/data')
  }
};
