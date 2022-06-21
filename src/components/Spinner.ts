import { keyframes } from '@stitches/react';

import { styled } from '@/styles';

const spinnerAnimation = keyframes({
	to: {
		transform: 'rotate(360deg)',
	},
});

const Spinner = styled('div', {
	size: 3,
	borderStyle: 'solid',
	borderWidth: '$2',
	borderRadius: '100%',
	borderColor: '$bg',
	borderTopColor: '$primary-dark-1',
	borderBottomColor: '$primary-dark-1',
	animationName: spinnerAnimation.name,
	animationIterationCount: 'infinite',
	animationPlayState: 'running',
	animationDuration: '1s',
});

export default Spinner;
