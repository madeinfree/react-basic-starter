import React from 'react';

const HTML = ({ title, language = 'en', description }) =>
  <html lang={ language }>
    <head>
      <meta name='description' content={ description } />
      <title>
        { title }
      </title>
      <link rel='stylesheet' href='/build/style.css' />
    </head>
    <body>
      <div id='app' />
      <script src='/build/vendor.js' />
      <script src='/build/bundle.js' />
    </body>
  </html>;

export default HTML;
