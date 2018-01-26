import React from 'react';

const HTML = ({ title, language = 'en', description }) => (
  <html lang={language}>
    <head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </head>
    <body>
      <div id="app" />
      <script
        src={
          process.env.NODE_ENV === 'production'
            ? '/build/vendor.js'
            : '/build/vendor.bundle.js'
        }
      />
      <script src="/build/bundle.js" />
    </body>
  </html>
);

export default HTML;
