import { path } from 'ramda';
import axios from 'redaxios';

import RequestError from '@/pods/errors/RequestError';
import { LoginAPIResponse } from '@/pods/user/types';

import { makeErrorAsyncStatus, makeSuccessAsyncStatus } from '../asyncStatus';
import cookies from './cookies';
import { LoginValidationSchemaValues } from './loginValidationSchema';

const login = async (loginData: LoginValidationSchemaValues) => {
  try {
    const { data } = await axios.post<LoginAPIResponse>(
      '/api/auth/login',
      loginData
    );
    cookies.setAuthToken(data.token);
    return makeSuccessAsyncStatus(data);
  } catch (err) {
    const properError = path(['data', 'error'], err);
    if (typeof properError === 'string') {
      return makeErrorAsyncStatus(properError);
    }

    if (err instanceof RequestError) {
      return makeErrorAsyncStatus(err.message);
    }

    return makeErrorAsyncStatus('Autenticación fallida');
  }
};

export default login;
