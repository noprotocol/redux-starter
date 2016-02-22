var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {

  webpackConfig = merge(webpackConfig,{
    devtool: "source-map",
    entry : [
      './src/client/index.js'
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        // exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]},
    plugins : [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin("app.css"),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]  
  });

}else{

  webpackConfig = merge(webpackConfig,{
    devtool: 'inline-source-map',
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        // exclude: /node_modules/,
        // include: __dirname,
        include: path.resolve(__dirname, "src"),
        query: {
          // optional: ['runtime'],
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2'],
          env: {
            development: {
              plugins: [
                ['react-transform', {
                  transforms: [{
                    transform:  'react-transform-hmr',
                    imports: ['react'],
                    locals:  ['module']
                  },
                  {
                    transform: 'react-transform-catch-errors',
                    imports: ['react','redbox-react' ]
                  }]
                }]
              ]
            }
          }
        }
      },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]},
    entry : [
      'webpack-hot-middleware/client',
      './src/client/index.js'
    ],
    plugins : [
      new webpack.HotModuleReplacementPlugin()
    ]  
  });
  
}

module.exports = webpackConfig;
