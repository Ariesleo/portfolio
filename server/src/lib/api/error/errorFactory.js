import * as Yup from 'yup';
import config from '../../../configs/config.js';
import { ApplicationError } from './applicationError.js';
import { type, validationErrors } from './validationError.js';

const createError = (error, overrides) => {
  // if the file size is too large within the req body yup validation error 'entity.too.large' type gets activited PayloadTooLargeError
  if (error.type === type.ENTITY_TOO_LARGE) {
    return validationErrors.PAYLOAD_TOO_LARGE_ERROR;
  }
  // SyntaxError  type: 'entity.parse.failed'
  if (error.type === type.ENTITY_PARSE_FAILED) {
    return validationErrors.SYNTAX_ERROR;
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
