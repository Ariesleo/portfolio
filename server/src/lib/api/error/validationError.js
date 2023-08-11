import config from '../../../configs/config.js';
import statusCodes from '../../../constants/statusCodes.js';

const type = {
  ENTITY_PARSE_FAILED: 'entity.parse.failed',
  ENTITY_TOO_LARGE: 'entity.too.large',
};

const validationErrors = {
  PAYLOAD_TOO_LARGE_ERROR: {
    type: type.ENTITY_TOO_LARGE,
    name: 'PayloadTooLargeError',
    code: `VALIDATION_ERROR`,
    message: `File size cannot be greater than ${config.body_parser_limit}`,
    errors: 'Request entity too large',
    statusCode: statusCodes.BAD_REQUEST,
  },

  SYNTAX_ERROR: {
    type: type.ENTITY_PARSE_FAILED,
    name: 'SyntaxError',
    code: `VALIDATION_ERROR`,
    message: `Malformed file data`,
    errors: 'SyntaxError: Unexpected token',
    statusCode: statusCodes.BAD_REQUEST,
  },
};

export { type, validationErrors };
