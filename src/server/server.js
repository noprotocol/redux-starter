import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import DocumentMeta from 'react-document-meta';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import packagejson from '../../package.json';

const app = express();
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html class='no-js' lang=''>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
        ${DocumentMeta.renderAsHTML()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/static/bundle.js"></script>

        <script>
          (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='https://www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
      </body>
    </html>
  `;
}

if(process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/static', express.static(__dirname + '/../../dist'));
}

app.get('/api/data', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.send({
    'items': [
      {
        'title': 'Lorem ipsum'
      },
      {
        'title': 'dolor amet'
      },
      {
        'title': 'something else'
      }
    ]
  });
});

app.get('/*', function (req, res) {

  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      // console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps) {
      return res.status(404).end('Not found');
    }

    // const store = configureStore({user : user, version : packagejson.version});
    const store = configureStore({version : packagejson.version});

    const InitialView = (
      <Provider store={store}>
        <RouterContext{...renderProps} />
      </Provider>
    );

    // This method waits for all render component promises to resolve before returning to browser
    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
    .then(html => {
      const componentHTML = ReactDOMServer.renderToStaticMarkup(InitialView);
      const initialState = store.getState();
      console.log('XXXXXXXXX\n\n');
      console.log(initialState);
      console.log('XXXXXXXXX\n\n');
      res.status(200).end(renderFullPage(componentHTML,initialState))
    })
    .catch(err => {
      console.log(err)
      res.end(renderFullPage("",{}))
    });

  });

});

const server = app.listen(process.env.PORT || 3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
