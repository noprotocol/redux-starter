import {
  ITEMS_GET, ITEMS_GET_REQUEST, ITEMS_GET_SUCCESS, ITEMS_GET_FAILURE
} from '../actions/home';

export function items(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
   case ITEMS_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ITEMS_GET_SUCCESS:
      return Object.assign({}, state, {
        items: action.req.data.items,
        isFetching: false
      });
    case ITEMS_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

