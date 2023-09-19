#!/usr/bin/env node

const fs = require('fs');

async function countStudent(fileName) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const dept = new Map();
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
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
    });
    resolve();
  });
}

module.exports = countStudent;
