import { atom } from 'recoil';

import { AsyncStatus, makeInitialAsyncStatus } from '../asyncStatus';
import { User } from './types';

const userAtom = atom<AsyncStatus<User, string>>({
	key: 'user',
	default: makeInitialAsyncStatus(),
});

export default userAtom;
