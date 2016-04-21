import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routeReducer } from 'react-router-redux';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

import rootReducer from '../common/reducers';

import '../../styles/index.scss';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(browserHistory, initialState);
const rootElement = document.getElementById('root');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);

// TODO: Have this as an option in npm scripts?
// TODO: This broke with devtools v3, salvage or bin?
// if (process.env.NODE_ENV !== 'production') {
  // require('../server/devtools_v3')(store);
// }
