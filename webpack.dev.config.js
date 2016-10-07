/* eslint no-console: 0 */

const path = require('path');
const webpack = require('webpack');

class BasicStarterPlugin {
  apply(compiler) {
    compiler.plugin('invalid', () => {
      console.log('Compiling...');
    });
    compiler.plugin('done', (stats) => {
      const message = stats.toJson({}, true)
      message.errors.forEach(msg => {
        console.log(msg
          .replace('Module build failed:', '')
          .replace('SyntaxError', '(句法錯誤) '))
        console.log()
      })
      return
    })
  }
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:16668',
    'webpack/hot/only-dev-server',
    'react-dev-utils/webpackHotDevClient',
    './src/index.react.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  debug: true,
  devtool: '#eval-source-map',
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
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
    new BasicStarterPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
