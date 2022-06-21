import { selector } from 'recoil';

import userAtom from './userAtom';

export const isUserLoggedSelector = selector({
	key: 'hasUser',
	get: ({ get }) => get(userAtom).type === 'success',
});
