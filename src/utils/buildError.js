import HttpStatus from 'http-status-codes';
import { REFRESH_TOKEN_INVALID, USER_NOT_FOUND, ACCESS_TOKEN_INVALID } from '../constants/messages';

/**
 * Build error response for validation errors.
 *
 * @param  {Error} err
 * @returns {Object}
 */
function buildError(err) {
  // Validation errors
  if (err.isJoi) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details:
        err.details &&
        err.details.map(err => {
          return {
            message: err.message,
            param: err.path.join('.')
          };
        })
    };
  }

  // HTTP errors
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    };
  }

  if (err.isAccessTokenExpired) {
    return {
      code: 403,
      message: ACCESS_TOKEN_INVALID
    };
  }

  if (err.isRefreshTokenExpired) {
    return {
      code: 401,
      message: REFRESH_TOKEN_INVALID
    };
  }

  if (err.isUserNotFound) {
    return {
      code: 404,
      message: USER_NOT_FOUND
    };
  }

  // Return INTERNAL_SERVER_ERROR for all other cases
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  };
}

export default buildError;
