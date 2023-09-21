const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));

const server = http.createServer(app);
server.listen(1245);
