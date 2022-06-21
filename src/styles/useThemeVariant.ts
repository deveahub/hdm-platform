import { parseCookies, setCookie } from 'nookies';
import { useEffect, useRef, useState } from 'react';

import darkTheme from './darkTheme';

const THEME_MAPS = {
  default: null,
  dark: darkTheme,
} as const;

type ThemeMap = typeof THEME_MAPS;

type Keys = keyof ThemeMap;

const CACHE_KEY = 'theme-variant';

const getCurrentThemeVariant = (cache = false): Keys => {
  if (typeof window === 'undefined') return 'default';

  if (cache) {
    const cached = parseCookies()[CACHE_KEY];
    if (cached) return cached as Keys;
  }

  const className = (document.body.classList[0] || null) as Keys | null;
  if (!className) return 'default';

  const variant = Object.keys(THEME_MAPS).find((k) => {
    if (k === 'default') return false;

    const theme = THEME_MAPS[k as Keys];
    return theme && theme.className === className;
  });

  return (variant as Keys) || 'default';
};

const useThemeVariant = () => {
  const isMounted = useRef(false);
  const [themeVariant, setThemeVariant] = useState(
    getCurrentThemeVariant(true)
  );

  const changeTheme = (themeOrFnTheme: Keys | ((currTheme: Keys) => Keys)) => {
    const themeToApply =
      typeof themeOrFnTheme === 'function'
        ? themeOrFnTheme(getCurrentThemeVariant())
        : themeOrFnTheme;
    switch (themeToApply) {
      case 'dark':
        setThemeVariant('dark');
        setCookie(null, CACHE_KEY, 'dark', {
          path: '/',
          maxAge: 365 * 24 * 60 * 60,
        });
        document.body.classList.add(THEME_MAPS.dark);
        break;
      default:
        setCookie(null, CACHE_KEY, 'default', {
          path: '/',
          maxAge: 365 * 24 * 60 * 60,
        });
        setThemeVariant('default');
        document.body.className = '';
        break;
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const currentVariant = getCurrentThemeVariant();
      if (themeVariant !== currentVariant) changeTheme(themeVariant);
    }
  });

  return {
    themeVariant,
    handlers: {
      changeTheme,
    },
  };
};

export default useThemeVariant;
