import { styled } from '@/styles';

const AnchorLink = styled('a', {
  color: '$text',
  fontSize: '$0',
  width: 'fit-content',
  defaultVariants: {
    decoration: 'none',
  },
  variants: {
    primary: {
      true: {
        color: '$primary-dark-1',
      },
    },
    decoration: {
      none: {
        textDecoration: 'none',
      },
      underline: {
        textDecoration: 'underline',
      },
    },
  },
});

export default AnchorLink;
