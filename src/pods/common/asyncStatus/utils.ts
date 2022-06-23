import {
  ErrorAsyncStatus,
  InitialAsyncStatus,
  LoadingAsyncStatus,
  SuccessAsyncStatus,
} from './types';

export const makeInitialAsyncStatus = <Data>(
  data: Data | null = null
): InitialAsyncStatus<Data> => ({
  type: 'initial',
  data,
});

export const makeLoadingAsyncStatus = <Data>(
  data: Data | null = null
): LoadingAsyncStatus<Data> => ({
  type: 'loading',
  data,
});

export const makeErrorAsyncStatus = <Err>(err: Err): ErrorAsyncStatus<Err> => ({
  type: 'error',
  error: err,
});

export const makeSuccessAsyncStatus = <Data>(
  data: Data
): SuccessAsyncStatus<Data> => ({
  type: 'success',
  data,
});
