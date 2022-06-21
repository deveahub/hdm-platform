import { styled } from '@/styles';

const Text = styled('p', {
	color: '$text',
	defaultVariants: {
		as: 'p',
		weight: 'regular',
	},
	variants: {
		decoration: {
			underline: {
				textDecoration: 'underline',
			},
		},
		weight: {
			light: {
				fontWeight: '$light',
			},
			regular: {
				fontWeight: '$regular',
			},
			bold: {
				fontWeight: '$bold',
			},
		},
		as: {
			p: {
				fontSize: '$0',
			},
			h1: {
				fontSize: '$4',
			},
			h2: {
				fontSize: '$3',
			},
			h3: {
				fontSize: '$2',
			},
			h4: {
				fontSize: '$1',
			},
		},
		size: {
			'-3': {
				fontSize: '$-3',
			},
			'-2': {
				fontSize: '$-2',
			},
			'-1': {
				fontSize: '$-1',
			},
			0: {
				fontSize: '$0',
			},
			1: {
				fontSize: '$1',
			},
			2: {
				fontSize: '$2',
			},
			3: {
				fontSize: '$3',
			},
			4: {
				fontSize: '$4',
			},
		},
		textAlign: {
			center: {
				textAlign: 'center',
			},
			left: {
				textAlign: 'left',
			},
			right: {
				textAlign: 'right',
			},
		},
	},
});

export default Text;
