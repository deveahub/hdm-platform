import { path } from 'ramda';

import RequestError from '../errors/RequestError';

const parseRequestError = (error: unknown) => {
  const properError = path(['data', 'error'], error);
  if (typeof properError === 'string') {
    return properError;
  }

  const properErrors = path(['data', 'errors'], error);
  if (properErrors && typeof properErrors === 'object') {
    return properError as Record<string, string>;
  }

  if (error instanceof RequestError) {
    return error.message;
  }

  return null;
};

export default parseRequestError;
