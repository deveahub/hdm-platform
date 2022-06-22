import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'react-feather';

import { ComponentProps, styled } from '@/styles';

const Indicator = styled(CheckBoxPrimitive.Indicator, {});

const StyledCheckBox = styled(CheckBoxPrimitive.Root, {
  size: 3,
  backgroundColor: '$foreground',
  borderColor: '$foreground-dark-0',
  borderStyle: 'solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$4',

  '&[data-state=checked]': {
    backgroundColor: '$primary-dark-1',
  },
});

const StyledCheck = styled(Check, {
  size: 2,
  color: '$bg',
});

const CheckBox = (props: ComponentProps<typeof StyledCheckBox>) => (
  <StyledCheckBox {...props}>
    <Indicator>
      <StyledCheck />
    </Indicator>
  </StyledCheckBox>
);

export default CheckBox;
