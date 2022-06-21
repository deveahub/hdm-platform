import { NextApiHandler } from 'next';

import { User } from '@/pods/user/types';

interface LoginResponseSuccess extends User {
	token: string;
}

interface LoginResponseError {
	error: string;
}

export type LoginAPIResponse = LoginResponseSuccess | LoginResponseError;

const loginAPI: NextApiHandler<LoginAPIResponse> = async (_, res) => {
	res.json({});
};

export default loginAPI;
