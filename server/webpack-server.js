/* eslint no-console: 0 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack/webpack.dev.config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './build',
  hot: true,
  historyApiFallback: true
}).listen(16668, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('listening at http://localhost:16668');

  return false;
});
