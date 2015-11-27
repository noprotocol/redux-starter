import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
// import undoable from 'redux-undo';

import counter from './counter';
import version from './version';
import { items } from './home';
import { selectedReddit, postsByReddit } from './reddit';

const rootReducer = combineReducers({
  version: version,
  counter: counter,
  router : routerStateReducer,
  postsByReddit: postsByReddit,
  selectedReddit: selectedReddit,
  items: items
});

export default rootReducer;
