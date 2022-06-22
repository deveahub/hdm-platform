import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
  req: {
    cookies: { token },
  },
}) => {
  console.log('token', token);
  if (!token) {
    return {
      redirect: {
        permanent: true,
        destination: '/auth/login',
      },
    };
  }

  return {
    props: {},
  };
};

export default getServerSideProps;
