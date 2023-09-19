#!/usr/bin/env node

const { readFileSync } = require('fs');

function countStudents(fileName) {
  return new Promise((res) => {
    try {
      const dept = new Map();
      let count = 0;
      const data = readFileSync(fileName, 'utf8');
      const lines = data.split('\n');
      const students = lines.slice(1);
      students.forEach((student) => {
        if (student !== '') {
          count += 1;
          const sp = student.split(',');
          const fn = sp[0];
          const field = sp[3];
          if (!dept.has(field)) {
            dept.set(field, [fn]);
          } else {
            const li = dept.get(field);
            li.push(fn);
          }
        }
      });
      console.log(`Number of students: ${count}`);
      dept.forEach((v, k) => {
        console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(' ')}`);
      });
      res();
    } catch (err) {
      throw Error('Cannot load the database');
    }
  });
}

module.exports = countStudents;