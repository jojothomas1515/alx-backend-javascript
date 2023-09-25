const express = require('express');
const http = require('http');
const { readFile } = require('fs');
const promisify = require('util');

const app = express();
const { argv } = process;
const db = argv[2];

async function countStudents(fileName, res) {
  res.write('This is the list of our students\n');

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

    res.write(`Number of students: ${count}\n`);
    dept.forEach((v, k) => {
      res.write(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}\n`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (req, res) => {
  try {
    await countStudents(db, res);
  } catch (err) {
    res.write(err.message);
  }
  return res.end();
});

const server = http.createServer(app);
server.listen(1245);

module.exports = app;
