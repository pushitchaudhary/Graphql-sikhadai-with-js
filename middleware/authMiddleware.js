// src/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = {
  isAuthenticatedAdministrator: (req, res, next) => {
    const token = req.headers.authorization || '';
    if (!token) {
      return next(new Error('No token provided'));
    }
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      req.user = decoded;
      next();
    } catch (err) {
      next(new Error('Invalid token'));
    }
  },
  isAdministratorVerified: (req, res, next) => {
    if (!req.user || req.user.role !== 'administrator') {
      return next(new Error('User not verified as administrator'));
    }
    next();
  },
  isAdministratorAccountActive: (req, res, next) => {
    if (!req.user || req.user.role !== 'administrator') {
      return next(new Error('Administrator account is not active'));
    }
    next();
  },
};

module.exports = authMiddleware;
