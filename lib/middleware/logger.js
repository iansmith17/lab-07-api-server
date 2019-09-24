'use strict'

module.exports = (req, res, next, msg) => {
  if(msg) {
    console.log(`${req.method} ${req.path} ${req.requestTime} ${msg}`);
  } else {
    console.log(`${req.method} ${req.path} ${req.requestTime}`);
  }
  next();
}
