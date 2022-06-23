import { NextMiddleware, NextResponse } from 'next/server';

import { AUTH_TOKEN_COOKIE, FROM_PATH_COOKIE } from '@/pods/auth/cookies';

const UNLOGGED_PATHS = ['/auth/login', '/auth/direct-login'];

export const middleware: NextMiddleware = ({
  nextUrl: { searchParams, pathname, origin },
  cookies: {
    [AUTH_TOKEN_COOKIE]: authTokenCookie,
    [FROM_PATH_COOKIE]: fromPathCookie,
  },
}) => {
  // Exclusión para las rutas de la API
  if (pathname.includes('/api')) {
    return NextResponse.next();
  }

  const authToken = searchParams.get(AUTH_TOKEN_COOKIE);
  const isProtectedPath = !UNLOGGED_PATHS.includes(pathname);

  // Token de autenticación por parametro
  if (authToken) {
    return NextResponse.redirect(`${origin}${pathname}`).cookie(
      AUTH_TOKEN_COOKIE,
      authToken
    );
  }

  // Tenemos la cookie de autenticación y es una ruta protegida
  if (authTokenCookie && isProtectedPath) {
    return fromPathCookie
      ? NextResponse.redirect(`${origin}${fromPathCookie}`).clearCookie(
          FROM_PATH_COOKIE
        )
      : NextResponse.next();
  }

  // Tenemos la cookie de autenticación y no es una ruta protegida
  if (authTokenCookie && !isProtectedPath) {
    return NextResponse.redirect(origin);
  }

  // NO tenemos la cookie de autenticación y es una ruta protegida
  if (!authTokenCookie && isProtectedPath) {
    return NextResponse.redirect(`${origin}/auth/login`).cookie(
      FROM_PATH_COOKIE,
      pathname
    );
  }

  return NextResponse.next();
};
