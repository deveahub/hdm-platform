export type AsyncStatusDefaultError = Error | string;

export interface SuccessAsyncStatus<Data> {
	type: 'success';
	data: Data;
}

export interface ErrorAsyncStatus<Err = AsyncStatusDefaultError, Data = null> {
	type: 'error';
	data: Data | null;
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
	| ErrorAsyncStatus<Err, Data>
	| SuccessAsyncStatus<Data>;

export type AsyncStatusType = AsyncStatus<unknown>['type'];
