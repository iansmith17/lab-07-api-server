<<<<<<< HEAD
'use strict';

function logger(req, res, next) {
  console.log(req.path, req.method, req.requestTime);
  next();
}

module.exports = logger;
=======
'use strict'

module.exports = (req, res, next, msg) => {
  if(msg) {
    console.log(`${req.method} ${req.path} ${req.requestTime} ${msg}`);
  } else {
    console.log(`${req.method} ${req.path} ${req.requestTime}`);
  }
  next();
}
>>>>>>> 52cd3804446bc41efa630eabc6681a5d030572b3
