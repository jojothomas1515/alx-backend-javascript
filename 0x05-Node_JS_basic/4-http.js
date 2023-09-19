#!/usr/bin/env node

const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello Holberton School!');
  res.end();
});

const port = process.env.PORT || 5000;
app.listen(1245, () => console.log(`listening on port ${port}`));

module.exports = app;
