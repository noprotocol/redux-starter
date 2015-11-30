import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

import "../../styles/index.scss";

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Router children={routes} history={history} />
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);

// TODO: Have this as an option in npm scripts?
// TODO: This broke with devtools v3, salvage or bin?
// if (process.env.NODE_ENV !== 'production') {
  // require('../server/devtools')(store);
// }
