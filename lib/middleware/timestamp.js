'use strict';

function timestamp(req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next();
}

module.exports = timestamp;
