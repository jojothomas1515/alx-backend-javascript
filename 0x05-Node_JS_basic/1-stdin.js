#!/usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = 'Welcome to Holberton School, what is your name?';

console.log(question);

readline.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

readline.on('SIGINT', () => {
  console.log('his important software is now closing');
  process.exit();
});
readline.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});
