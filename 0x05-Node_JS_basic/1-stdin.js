#!/usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = 'Welcome to Holberton School, what is your name?';

console.log(question);
if (process.stdin.isTTY) {
  readline.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    process.exit();
  });
}
if (!process.stdin.isTTY) {
  readline.on('line', (input) => {
    process.stdout(`Your name is: ${input}\r`);
    console.log('This important software is now closing');
  });
}
