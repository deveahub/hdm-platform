import axios from 'redaxios';

import makeRequestHandler from '../common/requests/makeRequestHandler';
import cookies from './cookies';
import { LoginValidationSchemaValues } from './loginValidationSchema';
import { LoginAPIResponse } from './types';

const login = makeRequestHandler(
  async (loginData: LoginValidationSchemaValues) => {
    const { data } = await axios.post<LoginAPIResponse>(
      '/api/auth/login',
      loginData
    );
    cookies.setAuthToken(data.token);
    return data;
  },
  {
    defaultError: 'Autenticación fallida',
  }
);

export default login;
