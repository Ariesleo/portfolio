import config from '../configs/config.js';
import statusCodes from '../constants/statusCodes.js';
import { CustomHttpError } from '../errors/CustomError.js';

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    httpStatusCode: err.statusCode || statusCodes.INTERNAL_SERVER_ERROR,
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
        message = err;
      } else if (err instanceof Error) {
        message = err.message;
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
  res.status(httpStatusCode).send({
    error: {
      message: message,
      timestamp: err.timestamp || undefined,
      documentationUrl: err.documentationUrl || undefined,
      stackTrace: stackTrace,
    },
  });

  return next(err);

  // Handle specific error types
  // if (err.name === 'ValidationError') {
  //   defaultError.statusCode = statusCodes.BAD_REQUEST;
  //   // defaultError.msg = err.message
  //   defaultError.msg = Object.values(err.errors)
  //     .map((item) => item.message)
  //     .join(',');
  // }
  // if (err.code && err.code === 11000) {
  //   defaultError.statusCode = statusCodes.BAD_REQUEST;
  //   defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  // }

  // console.log({ defaultError });

  // res.status(defaultError.statusCode).send({ msg: defaultError.msg });
};

export default errorHandler;
