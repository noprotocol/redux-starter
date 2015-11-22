import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
// import undoable from 'redux-undo';

// import user from './user';
import counter from './counter';
import version from './version';
// import layout from './layout';
// import todos from './todos';
// import { selectedReddit, postsByReddit } from './reddit';

const rootReducer = combineReducers({
  version: version,
  counter: counter,
  router : routerStateReducer
});

export default rootReducer;
