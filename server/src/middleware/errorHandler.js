import { ApplicationError } from '../lib/api/error/applicationError.js';
import { CommonError } from '../lib/api/error/commonError.js';
import { createError } from '../lib/api/error/errorFactory.js';
import { formatError, sendResponse } from '../lib/api/response/index.js';

const errorHandler = (err, req, res, next) => {
  const { analytics = {} } = err.meta || {};
  // logging for analytics
  console.log({ analytics });

  if (err instanceof ApplicationError) {
    const code = err.statusCode || 500;
    return res.status(code).json(formatError(err));
  }

  if (err instanceof Error) {
    const newError = createError(err);
    const code = newError.statusCode || 500;
    return res.status(code).json(formatError(newError));
  }

  const unknownError = new ApplicationError(CommonError.UNKNOWN_ERROR);

  return sendResponse(res, unknownError, statusCode);
};

export default errorHandler;
