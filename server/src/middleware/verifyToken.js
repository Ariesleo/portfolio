import jwt from 'jsonwebtoken';
import config from '../configs/config.js';
import { CommonError } from '../lib/api/error/commonError.js';
import { createError } from '../lib/api/error/errorFactory.js';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  try {
    if (!token) {
      throw {
        ...CommonError.FORBIDDEN,
        message: 'Access denied.',
      };
    } else {
      const tokenString = token.split(' ')[1];
      jwt.verify(tokenString, config.jwtSecret, (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            throw {
              ...CommonError.UNAUTHORIZED,
              message: 'Unauthorized. Token expired',
            };
          } else {
            throw {
              ...CommonError.FORBIDDEN,
              message: 'Access denied.',
            };
          }
        }

        req.user = decoded;
        next();
      });
    }
  } catch (e) {
    return next(createError(e));
  }
};

export default verifyToken;
