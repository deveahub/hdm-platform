export type AsyncStatusDefaultError = string | Record<string, string>;

export interface SuccessAsyncStatus<Data> {
  type: 'success';
  data: Data;
}

export interface ErrorAsyncStatus<Err = AsyncStatusDefaultError> {
  type: 'error';
  error: Err;
}

export interface LoadingAsyncStatus<Data> {
  type: 'loading';
  data: Data | null;
}

export interface InitialAsyncStatus<Data> {
  type: 'initial';
  data: Data | null;
}

export type AsyncStatus<Data, Err = AsyncStatusDefaultError> =
  | InitialAsyncStatus<Data>
  | LoadingAsyncStatus<Data>
  | ErrorAsyncStatus<Err>
  | SuccessAsyncStatus<Data>;

export type AsyncStatusType = AsyncStatus<unknown>['type'];
