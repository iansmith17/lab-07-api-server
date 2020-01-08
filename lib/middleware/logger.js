'use strict';

function logger(req, res, next) {
  console.log(req.path, req.method, req.requestTime);
  next();
}

module.exports = logger;
