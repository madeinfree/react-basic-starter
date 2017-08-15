require('ignore-styles').default([ '.css' ]);
require('babel-register');
process.env.NODE_ENV === 'production' ? require('./webpack-prod-server.js') : require('./webpack-dev-server.js');
