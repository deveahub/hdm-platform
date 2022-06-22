import { styled } from '@/styles';

import Text from './Text';

const TextError = styled(Text, {
  color: '$red',
});

TextError.defaultProps = {
  size: '-1',
};

export default TextError;
