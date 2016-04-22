import { Route } from 'react-router';
import React from 'react';

import App from './containers/App';

// Redux Smart
import HomePage from './components/Home';
import AboutPage from './containers/AboutPage';
import ItemsPage from './containers/ItemsPage';

// Redux Dumb
import error404 from './components/404';

export default (
  <Route name='app' path='/' component={App}>
    <Route path='home' component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='items' component={ItemsPage} />
    <Route path='*' component={error404} />
  </Route>
);
