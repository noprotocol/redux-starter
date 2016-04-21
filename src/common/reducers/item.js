import {
  ITEMS_GET, ITEMS_GET_REQUEST, ITEMS_GET_SUCCESS, ITEMS_GET_FAILURE
} from '../actions/item';

export default function items(state = {
  items: []
}, action) {
  switch(action.type) {
  case ITEMS_GET_REQUEST:
    return Object.assign({}, state, {
    });
  case ITEMS_GET_SUCCESS:
    return Object.assign({}, state, {
      items: action.req.data.items
    });
  case ITEMS_GET_FAILURE:
    return Object.assign({}, state, {
    });
  default:
    return state;
  }
};
