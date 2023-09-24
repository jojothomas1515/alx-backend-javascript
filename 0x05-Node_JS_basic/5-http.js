#!/usr/bin/env node

const http = require('http');

const { argv } = process;
const db = argv[2] || 'database.csv';

const { readFile } = require('fs');
const { promisify } = require('util');

async function countStudents(fileName, res) {
  try {
    const dept = new Map();
    let count = 0;
    const rf = promisify(readFile);
    const data = await rf(fileName, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1);
    students.forEach((student) => {
      if (student !== '') {
        const sp = student.split(',');
        const fn = sp[0];
        const ln = sp[1];
        const age = sp[2];
        const field = sp[3];
        if (fn && ln && age && field) {
          count += 1;

          if (!dept.has(field)) {
            dept.set(field, [fn]);
          } else {
            const li = dept.get(field);
            li.push(fn);
          }
        }
      }
    });
    res.write('This is the list of our students\n');

    res.write(`Number of students: ${count}\n`);
    dept.forEach((v, k) => {
      res.write(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}\n`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/students') {
    try {
      await countStudents(db, res);
    } catch (err) {
      res.write(err.message);
    }
    return res.end();
  }
  res.write('Hello Holberton School!');
  return res.end();
});

const port = process.env.PORT || 1245;
app.listen(1245, () => console.log(`listening on port ${port}`));

module.exports = app;
