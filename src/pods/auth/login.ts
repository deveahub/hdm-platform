import axios from 'redaxios';

import RequestError from '../errors/RequestError';
import { LoginAPIResponse } from './loginAPI';
import { LoginValidationSchemaValues } from './loginValidationSchema';

const login = async (loginData: LoginValidationSchemaValues) => {
	const { data, status } = await axios.post<LoginAPIResponse>(
		'/api/auth/login',
		loginData
	);

	if (status !== 200) throw new RequestError('Error al iniciar sesión');

	if ('error' in data) throw new RequestError(data.error);

	return data;
};

export default login;
