import * as Yup from 'yup';
import config from '../../../configs/config.js';
import { ApplicationError } from './applicationError.js';

const createError = (error, overrides) => {
  // if the file size is too large within the req body yup validation error 'entity.too.large' type gets activited
  if (error.type === 'entity.too.large') {
    return {
      type: ApplicationError.type.APP_NAME,
      name: error.name,
      code: `VALIDATION_ERROR ${error.name}`,
      message: `File size cannot be greater than ${config.body_parser_limit}`,
      errors: error.message,
      statusCode: 400,
      meta: {
        context: error.value,
      },
    };
  }
  const isYupError = error instanceof Yup.ValidationError;
  if (isYupError) {
    const yupError = mapYupValidationError(error);
    return new ApplicationError(yupError, overrides);
  }
  return new ApplicationError(error, overrides);
};

const mapYupValidationError = (error) => {
  return {
    type: ApplicationError.type.APP_NAME,
    code: 'VALIDATION_ERROR',
    message: error.message,
    errors: error.inner,
    statusCode: 400,
    meta: {
      context: error.value,
    },
  };
};

export { createError };
