
const applyMiddleware = (req, res, middlewares) => {
    return new Promise((resolve, reject) => {
      let index = 0;
  
      const next = (err) => {
        if (err) {
          return reject(err);
        }
        if (index >= middlewares.length) {
          return resolve();
        }
        const middleware = middlewares[index++];
        middleware(req, res, next);
      };
  
      next();
    });
  };
  
  module.exports = applyMiddleware;
  