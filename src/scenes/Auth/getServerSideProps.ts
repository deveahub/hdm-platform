import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
	req: {
		cookies: { token },
	},
}) => {
	if (token) {
		return {
			redirect: {
				permanent: true,
				destination: '/',
			},
		};
	}

	return {
		props: {},
	};
};

export default getServerSideProps;
