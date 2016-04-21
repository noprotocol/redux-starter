import { combineReducers } from 'redux';
// import { routerStateReducer } from 'redux-router';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import version from './version';
import items from './item';

const rootReducer = combineReducers({
  version: version,
  counter: counter,
  routing: routerReducer,
  items: items,
});

export default rootReducer;
