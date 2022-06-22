import Head from 'next/head';

import Layout from './components/Layout';
import ResetPasswordForm from './components/ResetPasswordForm';

const ResetPasswordPage = () => (
  <Layout title="Restablecer contraseña">
    <Head>
      <title>Restablecer contraseña - HDM Eventos</title>
    </Head>
    <ResetPasswordForm />
  </Layout>
);

export default ResetPasswordPage;
