import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../../server/devtools_v3';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import createLogger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';
import rootReducer from '../reducers';


const middlewareBuilder = () => {

  let middleware = {};
  let universalMiddleware = [thunk,promiseMiddleware];
  let allComposeElements = [];

  if(process.browser){
    if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'){
      middleware = applyMiddleware(...universalMiddleware);
      allComposeElements = [
        middleware
      ]
    } else {
      const reduxRouterMiddleware = syncHistory(browserHistory);
      let universalMiddleware = [thunk,promiseMiddleware,reduxRouterMiddleware];
      middleware = applyMiddleware(...universalMiddleware,createLogger({collapsed: true}));
      allComposeElements = [
        middleware,
        DevTools.instrument(),
        persistState(
          window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
          )
        ),
      ]
    }
  } else {
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [
      middleware
    ]
  }

  return allComposeElements;

}

// TODO: Obviously this could be done better ..
let finalCreateStore;
if(process.browser) {
  finalCreateStore = compose(...middlewareBuilder())(createStore);
  // finalCreateStore = compose(...middlewareBuilder(),   window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
} else {
  finalCreateStore = compose(...middlewareBuilder())(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if(process.browser) {
    const reduxRouterMiddleware = syncHistory(browserHistory);
    reduxRouterMiddleware.listenForReplays(store, ({ router }) => router.location);
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
