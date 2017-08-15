/* eslint no-console: 0 */
const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: [ `webpack-dev-server/client?http://0.0.0.0:${process.env.APP_PORT}`, 'webpack/hot/only-dev-server', 'react-dev-utils/webpackHotDevClient', './src/index.react.js' ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: module => {
        const context = module.context;
        return context && context.indexOf('node_modules') !== -1;
      }
    })
  ]
};
