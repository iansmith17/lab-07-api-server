'use strict';



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