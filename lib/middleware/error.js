'use strict';

module.exports = (err, req, res, next) => {
  console.error(err)
  res.status(500)
  res.send({
    message: err.message,
    error: err.toString(),
    status: 500,
  });

  res.status(404)
  res.send({
    message: err.message,
    error: err.toString(),
    status: 404,
  });
};