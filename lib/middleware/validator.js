'use strict';

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    if (Math.random() > 0.5) {
      req.valid = true;
    } else {
      req.valid = false;
    }
    next();
  } else {
    next();
  }
}