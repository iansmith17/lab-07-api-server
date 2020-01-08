'use strict';

<<<<<<< HEAD
function timestamp(req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next();
}

module.exports = timestamp;
=======


// module.exports = (req, res, next) =>{
//     console.log(`${req.method} ${req.path}`);
//     next();
    
//     let endDate = new Date();
//     console.log(`${req.method} ${req.path} done in ${endDate - startDate}ms`)
// }; CRAB BATTTLEEEEEE



module.exports = (req, res, next) => {
  let date = new Date();
  req.requestTime = date;

  next();
}//     console.log(`${req.method} ${req.path}`);
//     next();
    
//     let endDate = new Date();
//     console.log(`${req.method} ${req.path} done in ${endDate - startDate}ms`)
// }; CRAB BATTTLEEEEEE



module.exports = (req, res, next) => {
  let date = new Date();
  req.requestTime = date;

  next();
}
>>>>>>> 52cd3804446bc41efa630eabc6681a5d030572b3
