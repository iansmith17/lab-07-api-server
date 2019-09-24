'use strict';

const server = require('./lib/server');

console.log(typeof(server.start));

server.start(3000);

//const PORT = process.env.PORT || 3000;
// server.start(3000);