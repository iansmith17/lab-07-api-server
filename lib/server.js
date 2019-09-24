"use strict";

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const timestamp = require('./middleware/timestamp');
const errorHandleShtuff = require('./middleware/error');
const validator = require('./middleware/validator');

let db = [];
app.use(express.json());
app.use(timestamp);
//app.use(validator);

// Route to Get All Categories
app.get("/categories", (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
  logger(req, res, next, 'yo');
});

// Route to Create a Category
app.post("/categories", (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
  console.log(req.body);
  logger(req, res, next, 'yo');
  res.status(200).send('ok');
});

app.use('*', (req, res, next) => {
  res.status(400).send('Not Found!');
});

app.use( (err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = {
  server: app,
  start(PORT) {
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
