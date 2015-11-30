import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
// import undoable from 'redux-undo';

import counter from './counter';
import version from './version';
import { selectedReddit, postsByReddit } from './reddit';

const rootReducer = combineReducers({
  version: version,
  counter: counter,
  router : routerStateReducer,
  postsByReddit: postsByReddit,
  selectedReddit: selectedReddit,
});

export default rootReducer;
