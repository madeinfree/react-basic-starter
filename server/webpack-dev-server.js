/* eslint no-console: 0 */
/* eslint global-require: 0 */
/* eslint no-unused-vars: 0 */
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ParseServer from 'parse-server';
import ParseDashboard from 'parse-dashboard';
const express = require('express');
const app = express();
require('dotenv').config();

const parse = new ParseServer({
  serverURL: '/api/parse-server/v1',
  databaseURI: process.env.PARSE_SERVER_DB_URL,
  cloud: path.resolve(`${__dirname}/cloud/main.js`),
  appId: 'react-basic-starter-dev',
  masterKey: 'MasterKey'
});
const allowInsecureHTTP = true;
const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: process.env.PARSE_SERVER_URL,
        appId: process.env.PARSE_SERVER_APP_ID,
        masterKey: process.env.PARSE_SERVER_MASTER_KEY,
        appName: process.env.PARSE_SERVER_APP_NAME
      }
    ],
    users: [
      {
        user: process.env.PARSE_SERVER_LOGIN_USERNAME,
        pass: process.env.PARSE_SERVER_LOGIN_PASSWORD
      }
    ]
  },
  allowInsecureHTTP
);

app.set('view options', { layout: false });
app.engine('html', require('ejs').renderFile);

app.use('/api/parse-server/v1', parse.app);
app.use('/parse-dashboard', parseDashboard);
app.use('/build', express.static(`${__dirname}/../build`));

app.get('*', (req, res) => {
  res.send(
    renderToStaticMarkup(
      require('../src/html.react').default({
        title: process.env.META_TITLE,
        description: process.env.META_DESCRIPTION
      })
    )
  );
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listen on port ${process.env.APP_PORT}, NODE_ENV is ${process.env.NODE_ENV}`);
});
