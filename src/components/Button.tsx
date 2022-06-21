import { styled } from '@/styles';

const Button = styled('button', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textShadow: '0px 1px 1px #333',
	textTransform: 'uppercase',
	border: 'none',
	cursor: 'pointer',
	color: '$bg',
	fontSize: '$01',
	transition: '$0',
	fontWeight: '$bold',
	borderRadius: '$4',
	minHeight: 56,
	p: 2,
	defaultVariants: {
		rounded: true,
		variant: 'primary',
		disabled: false,
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: '$primary',
			},
			foreground: {
				backgroundColor: '$foreground-dark-2',
			},
			green: {
				backgroundColor: '$green',
			},
			orange: {
				backgroundColor: '$orange',
			},
			yellow: {
				backgroundColor: '$yellow',
			},
			red: {
				backgroundColor: '$red-light-1',
			},
		},
		fullWidth: {
			true: {
				width: '100%',
			},
		},
		rounded: {
			true: {
				borderRadius: 3,
			},
		},
		disabled: {
			true: {
				opacity: 0.8,
				cursor: 'not-allowed',
			},
			false: {
				'&:hover': {
					filter: 'brightness(90%)',
					boxShadow: '0 0 3px $colors$primary-dark-2',
				},

				'&:active': {
					filter: 'brightness(80%)',
				},
			},
		},
	},
});

export default Button;
