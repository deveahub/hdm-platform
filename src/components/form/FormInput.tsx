import { ComponentProps } from '@stitches/react';
import { useField, useFormikContext } from 'formik';
import { useId } from 'react';

import Input from '../Input';
import Stack from '../Stack';
import Text from '../Text';
import TextError from '../TextError';

interface FormInputProps extends ComponentProps<typeof Input> {
	label?: string;
	name: string;
	CustomInput?: typeof Input;
}

const FormInput = ({
	CustomInput = Input,
	name,
	label,
	...props
}: FormInputProps) => {
	const { submitCount } = useFormikContext();
	const [field, meta] = useField(name);
	const id = useId();

	const error =
		(Boolean(submitCount) || meta.touched) && meta.error ? meta.error : null;

	return (
		<Stack direction="column" spacing={1}>
			{label && <label htmlFor={id}>{label}</label>}
			<CustomInput
				css={{
					...(error && { borderColor: '$red-dark-0' }),
				}}
				{...props}
				{...field}
				id={id}
			/>
			{error && <TextError>{meta.error}</TextError>}
		</Stack>
	);
};

export default FormInput;
