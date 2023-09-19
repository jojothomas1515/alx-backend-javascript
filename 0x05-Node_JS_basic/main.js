#!/usr/bin/env node
const fs = require('fs');

// async function main() {
//   try {
//     const stats = await fs.stat('README.md');
//     console.log(stats.isDirectory());
//   } catch (err) {
//     console.log(err);
//   }
// }
// main();

// const path = require('path');
// const myPath = '/home/jojo/Documents/alx/alx-backend-javascript/0x05-Node_JS_basic';
// const p2 = '/home/jojo/Documents/alx/../alx-backend-javascript/0x00-ES6_basic';
// const relate = './README.md';
// console.log(path.resolve(relate));
// console.log(path.resolve(p2));

// fs.open('./README.md', 'r', (err, fd) => {
//   if (err) {
//     console.log('Error occured when opening files');
//     process.exit(1);
//   }
//   fs.readFile(fd, (err, data) => {
//     console.log(data.toString());
//   });
// });
console.time('doSomething()');

const x = 1;
const y = 2;
const z = 3;
console.count('The value of x is ' + x + ' and has been checked .. how many times?');
console.count('The value of x is ' + x + ' and has been checked .. how many times?');
console.count('The value of y is ' + y + ' and has been checked .. how many times?');
console.count('now');
console.count('now');
console.count('now');
console.trace();
console.count('now');

console.timeEnd('doSomething()');
