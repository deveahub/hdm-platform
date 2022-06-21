import { useSetRecoilState } from 'recoil';

import {
	makeErrorAsyncStatus,
	makeLoadingAsyncStatus,
	makeSuccessAsyncStatus,
} from '../asyncStatus';
import RequestError from '../errors/RequestError';
import userAtom from '../user/userAtom';
import login from './login';
import { LoginValidationSchemaValues } from './loginValidationSchema';

const useLogin = () => {
	const setUser = useSetRecoilState(userAtom);
	const loginHandler = async (loginValues: LoginValidationSchemaValues) => {
		try {
			setUser(makeLoadingAsyncStatus());
			const user = await login(loginValues);
			setUser(makeSuccessAsyncStatus(user));
		} catch (err) {
			if (err instanceof RequestError) {
				setUser(makeErrorAsyncStatus(err.message));
				return;
			}

			setUser(makeErrorAsyncStatus('No se ha podido autenticar tu usuario'));
		}
	};

	return loginHandler;
};

export default useLogin;
