import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../../server/devtools_v3';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routeReducer, routerMiddleware } from 'react-router-redux'

import createLogger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';
import rootReducer from '../reducers';


export default function configureStore(history, initialState = {}) {

  const enhancer = compose(
    applyMiddleware(
      thunk,
      promiseMiddleware,
      routerMiddleware(history),
      createLogger({collapsed: true}),
    ),
    DevTools.instrument(),
    persistState(
      process.browser ?
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      ) : null
    )
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('./../reducers').default);
    });
  }

  return store;

};

