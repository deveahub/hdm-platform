import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';

import { withSWRConfig } from '@/pods/swr';
import AppHead from '@/scenes/App/AppHead';
import { globalStyles } from '@/styles';

interface Props extends AppProps {
	Component: FC<any>;
	pageProps: {
		fallback?: Record<string, unknown>;
	};
}

function App({ Component, pageProps: { fallback, ...pageProps } = {} }: Props) {
	globalStyles();

	const component = <Component {...pageProps} />;
	const enhancedComponent = fallback
		? withSWRConfig(fallback, component)
		: component;

	return (
		<>
			<AppHead />
			<RecoilRoot>{enhancedComponent}</RecoilRoot>
		</>
	);
}

export default appWithTranslation(App as FC);
