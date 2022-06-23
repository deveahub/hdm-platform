import { addDays } from 'date-fns';
import Cookie from 'js-cookie';

export const AUTH_TOKEN_COOKIE = 'auth-token';

export const FROM_PATH_COOKIE = 'from-path';

const cookies = {
  setAuthToken: (token: string) =>
    Cookie.set(AUTH_TOKEN_COOKIE, token, {
      path: '/',
    }),
  removeAuthToken: () => Cookie.remove(AUTH_TOKEN_COOKIE),
  getAuthToken: () => Cookie.get(AUTH_TOKEN_COOKIE) || null,
  setFromPath: (path: string) =>
    Cookie.set(FROM_PATH_COOKIE, path, {
      path: '/',
      expires: addDays(new Date(), 1),
    }),
  removeFromPath: () => Cookie.remove(FROM_PATH_COOKIE),
  getFromPath: () => Cookie.get(FROM_PATH_COOKIE) || null,
};

export default cookies;
