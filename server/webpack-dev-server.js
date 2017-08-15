/* eslint no-console: 0 */
/* eslint global-require: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
const express = require('express');
const app = express();
require('dotenv').config();

app.set('view options', { layout: false });
app.engine('html', require('ejs').renderFile);

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
