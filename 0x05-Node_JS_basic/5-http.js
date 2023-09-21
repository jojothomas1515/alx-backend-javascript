#!/usr/bin/env node

const http = require('http');
const countStudents = require('./3-read_file_async');

const { argv } = process;
let db = '';
if (argv.length > 2) {
  // eslint-disable-next-line prefer-destructuring
  db = argv[2];
}
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/students') {
    res.write('This is the list of our students');
    try {
      res.write(countStudents(db));
    } catch (err) {
      res.write(err.message);
    }
    res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello Holberton School!');
  res.end();
});

const port = process.env.PORT || 1245;
app.listen(1245, () => console.log(`listening on port ${port}`));

module.exports = app;
