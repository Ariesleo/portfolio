import config from '../configs/config.js';
import statusCodes from '../constants/statusCodes.js';
import { CustomHttpError } from '../errors/CustomError.js';

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    httpStatusCode: err.httpStatusCode || statusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };

  // if the error is a custom defined error
  if (err instanceof CustomHttpError) {
    defaultError.httpStatusCode = err.httpStatusCode;
    defaultError.msg = err.message;
  } else {
    // hide the detailed error message in production
    // for security reasons
    if (config.node_env !== 'production') {
      // since in JavaScript you can also
      // directly throw strings
      if (typeof err === 'string') {
        defaultError.msg = err;
      } else if (err instanceof Error) {
        defaultError.msg = err.message;
      }
    }
  }

  let stackTrace = undefined;

  // return the stack trace only when
  // developing locally or in stage
  if (config.node_env !== 'production') {
    stackTrace = err.stack;
  }

  // logg the error
  console.error(err);
  // other custom behaviors...

  // return the standard error response
  res.status(defaultError.httpStatusCode).send({
    error: {
      message: defaultError.msg,
      timestamp: err.timestamp || undefined,
      documentationUrl: err.documentationUrl || undefined,
      stackTrace: stackTrace,
    },
  });

  return next(err);
};

export default errorHandler;
