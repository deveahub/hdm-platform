import { useSetRecoilState } from 'recoil';

import { makeLoadingAsyncStatus } from '../asyncStatus';
import userAtom from '../user/userAtom';
import login from './login';
import { LoginValidationSchemaValues } from './loginValidationSchema';

const useLogin = () => {
  const setUser = useSetRecoilState(userAtom);

  const loginHandler = async (loginValues: LoginValidationSchemaValues) => {
    setUser(makeLoadingAsyncStatus());
    setUser(await login(loginValues));
  };

  return loginHandler;
};

export default useLogin;
