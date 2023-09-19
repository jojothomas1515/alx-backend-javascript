#!/usr/bin/env node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = 'Welcome to Holberton School, what is your name?\n';
readline.question(question, (answer) => {
  console.log(`Your name is: ${answer}`);
  readline.close();
  console.log('This important software is now closing');
});
