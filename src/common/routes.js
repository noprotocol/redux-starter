import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
// import CounterPage from "./containers/CounterPage";
// import RedditPage from "./containers/RedditPage";
// import TodoPage from "./containers/TodoPage";

//Redux Dumb
import HomePage from "./components/Home";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
    <Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={error404}/>
  </Route>
);
