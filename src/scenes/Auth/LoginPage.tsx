import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import cookies from '@/pods/auth/cookies';
import { isUserLoggedSelector } from '@/pods/user/selectors';

import Layout from './components/Layout';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  const isUserLogged = useRecoilValue(isUserLoggedSelector);
  const { push } = useRouter();

  useEffect(() => {
    if (isUserLogged) {
      push(cookies.getFromPath() || '/', undefined, { shallow: true });
      cookies.removeFromPath();
    }
  }, [isUserLogged, push]);

  return (
    <Layout title="Acceder">
      <Head>
        <title>Acceso - HDM Eventos</title>
      </Head>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
