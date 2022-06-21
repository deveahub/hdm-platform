import { ReactNode } from 'react';

import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { styled } from '@/styles';

const Container = styled('div', {
	maxWidth: 780,
	width: '100%',
	mx: 'auto',
	display: 'grid',
	gap: 2,
	alignContent: 'center',
	px: 2,
});

const ChildrenContainer = styled(Stack, {
	minHeight: 302,
});

interface LayoutProps {
	children: ReactNode;
	title: String;
}

const Layout = ({ children, title }: LayoutProps) => (
	<Container>
		<Text
			weight="bold"
			as="h1"
			size={{
				'@initial': 2,
				'@bp1': 3,
				'@bp2': 4,
			}}
		>
			HDM - Eventos
		</Text>
		<Text as="h3">{title}</Text>
		<ChildrenContainer>{children}</ChildrenContainer>
	</Container>
);

export default Layout;
