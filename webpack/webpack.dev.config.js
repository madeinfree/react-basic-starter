/* eslint no-console: 0 */
const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: ['./src/index.react.js'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
    // publicPath: '/build/'
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: process.cwd()
      }
    })
  ]
};
