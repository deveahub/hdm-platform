import { UnwrapPromise } from 'next/dist/lib/coalesced-function';

import { makeErrorAsyncStatus, makeSuccessAsyncStatus } from '../asyncStatus';
import parseRequestError from './parseRequestError';

interface MakeRequestHandlerOptions {
  defaultError: string;
}

const makeRequestHandler =
  <T extends (...params: any[]) => Promise<unknown>>(
    handler: T,
    { defaultError }: MakeRequestHandlerOptions
  ) =>
  async (...params: Parameters<typeof handler>) => {
    try {
      const data = (await handler(...params)) as UnwrapPromise<ReturnType<T>>;
      return makeSuccessAsyncStatus(data);
    } catch (err) {
      const parsedError = parseRequestError(err);
      return makeErrorAsyncStatus(parsedError || defaultError);
    }
  };

export default makeRequestHandler;
