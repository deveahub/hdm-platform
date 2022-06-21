import { ComponentProps, styled } from '@/styles';

import Stack from './Stack';

const FieldsetStack = (props: ComponentProps<typeof Stack>) => (
	<Stack direction="column" {...props} {...{ as: 'fieldset' }} />
);

const FieldSet = styled(FieldsetStack, {
	border: 'none',
	gap: 2,
	p: 0,
});

export default FieldSet;
