import path  from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'

import App from '../src/App';

const PORT = process.env.PORT || 3006;

const app = express();
const sheet = new ServerStyleSheet();
app.get('/', (req, res) => {
  
  

  const app = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();  

  const indexFile = path.resolve('./build/index.html');


  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });

  sheet.seal();

});

app.use('/build', express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
