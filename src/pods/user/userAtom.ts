import { atom } from 'recoil';

import { AsyncStatus, makeInitialAsyncStatus } from '@/pods/common/asyncStatus';

import { User } from './types';

const userAtom = atom<AsyncStatus<User>>({
  key: 'user',
  default: makeInitialAsyncStatus(),
});

export default userAtom;
