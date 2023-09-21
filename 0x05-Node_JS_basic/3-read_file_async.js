#!/usr/bin/env node

const { readFile } = require('fs');
const { promisify } = require('util');

async function countStudents(fileName) {
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
    console.log(`Number of students: ${count}`);
    dept.forEach((v, k) => {
      console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
