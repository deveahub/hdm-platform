import { destroyCookie, parseCookies, setCookie } from 'nookies';

export const AUTH_TOKEN_COOKIE = 'token';

const cookies = {
  setAuthToken: (token: string) =>
    setCookie(null, AUTH_TOKEN_COOKIE, token, {
      path: '/',
    }),
  removeAuthToken: () => destroyCookie(null, AUTH_TOKEN_COOKIE),
  getAuthToken: () => parseCookies()[AUTH_TOKEN_COOKIE] || null,
};

export default cookies;
