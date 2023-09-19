#!/usr/bin/env node

const readFile = require('readline');

async function countStudent(fileName) {
  let count = 0;
  try {
    const dept = new Map();
    const data = await readFile(fileName, 'utf8');
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
    console.log(`Number of students: ${count}`);
    dept.forEach((v, k) => {
      console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
    });
  } catch (err) {
    Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudent;
