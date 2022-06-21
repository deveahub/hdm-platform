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

export const makeErrorAsyncStatus = <Err, Data>(
	err: Err,
	data: Data | null = null
): ErrorAsyncStatus<Err, Data> => ({
	type: 'error',
	error: err,
	data,
});

export const makeSuccessAsyncStatus = <Data>(
	data: Data
): SuccessAsyncStatus<Data> => ({
	type: 'success',
	data,
});
