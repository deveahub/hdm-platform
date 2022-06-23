import Head from 'next/head';

import DirectLoginForm from './components/DirectLoginForm';
import Layout from './components/Layout';

const ResetPasswordPage = () => (
  <Layout title="Acceder sin contraseña">
    <Head>
      <title>Acceso rápido - HDM Eventos</title>
    </Head>
    <DirectLoginForm />
  </Layout>
);

export default ResetPasswordPage;
