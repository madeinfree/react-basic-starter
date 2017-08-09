/* eslint no-console: 0 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack/webpack.dev.config';
require('dotenv').config();

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './develop',
  hot: true,
  historyApiFallback: true
}).listen(process.env.APP_PORT, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`listening at http://localhost:${process.env.APP_PORT}`);

  return false;
});
