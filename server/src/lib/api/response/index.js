import { createError } from '../error/errorFactory.js';
import { ApplicationError } from '../error/applicationError.js';

const formatError = (error, overrides = {}) => {
  // `Error.stack`'s `enumerable` property descriptor is `false`
  // Thus, `JSON.stringify(...)` doesn't enumerate over it.
  const stackTrace = JSON.stringify(error, ['stack'], 4) || {};
  const newError = JSON.parse(JSON.stringify(error));

  // No need to send to client
  newError.statusCode = undefined;
  delete newError.meta;

  return {
    success: false,
    error: {
      ...newError,
      stack: stackTrace.stack,
    },
    ...overrides,
  };
};

const formatResponse = (result, override = {}) => {
  return {
    success: true,
    data: result,
    ...override,
  };
};

const sendResponse = (res, payload, statusCode = 200, context = {}) => {
  if (payload instanceof ApplicationError) {
    const code = payload.statusCode || 500;
    return res.status(code).json(formatError(payload));
  }

  if (payload instanceof Error) {
    const newError = createError(payload);
    const code = newError.statusCode || 500;
    return res.status(code).json(formatError(newError));
  }

  return res.status(statusCode).json(formatResponse(payload));
};

export { formatError, sendResponse };
