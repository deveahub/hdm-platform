import { useState } from 'react';

import {
  AsyncStatus,
  makeInitialAsyncStatus,
  makeLoadingAsyncStatus,
} from '../common/asyncStatus';
import directLogin from './directLogin';
import { DirectLoginValidationSchemaValues } from './directLoginValidationSchema';

const useDirectLogin = () => {
  const [state, setState] = useState<AsyncStatus<boolean>>(
    makeInitialAsyncStatus()
  );

  const directLoginHandler = async (
    directLoginValues: DirectLoginValidationSchemaValues
  ) => {
    setState(makeLoadingAsyncStatus());
    setState(await directLogin(directLoginValues));
  };

  return {
    ...state,
    handlers: {
      directLogin: directLoginHandler,
    },
  };
};

export default useDirectLogin;
