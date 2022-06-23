import { styled } from '@/styles';

import Text from './Text';

const TextSuccess = styled(Text, {
  color: '$green',
});

TextSuccess.defaultProps = {
  size: '-1',
};

export default TextSuccess;
