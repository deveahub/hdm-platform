import axios from 'redaxios';

import makeRequestHandler from '../common/requests/makeRequestHandler';
import { DirectLoginValidationSchemaValues } from './directLoginValidationSchema';
import { DirectLoginAPIResponse } from './types';

const directLogin = makeRequestHandler(
  async (loginData: DirectLoginValidationSchemaValues) => {
    const {
      data: { success },
    } = await axios.post<DirectLoginAPIResponse>(
      '/api/auth/direct-login',
      loginData
    );
    return success;
  },
  {
    defaultError: 'Error al crear tu enlace de acceso sin contraseña',
  }
);

export default directLogin;
