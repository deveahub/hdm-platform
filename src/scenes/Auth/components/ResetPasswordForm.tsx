import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import FieldSet from '@/components/Fieldset';
import FormInput from '@/components/form/FormInput';
import Stack from '@/components/Stack';
import resetPasswordValidationSchema from '@/pods/auth/resetPasswordValidationSchema';

const ResetPasswordForm = () => {
	const { push } = useRouter();

	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={resetPasswordValidationSchema}
			onSubmit={console.log}
		>
			<Stack fullWidth as={Form} direction="column" spacing={2}>
				<FieldSet>
					<FormInput
						type="email"
						label="Correo electronico"
						name="email"
						placeholder="username@email.com"
						autoComplete="email"
					/>
				</FieldSet>
				<Stack spacing={2}>
					<Button
						type="button"
						variant="foreground"
						onClick={() => push('/auth/login', undefined, { shallow: true })}
					>
						Volver
					</Button>
					<Button fullWidth type="submit">
						Restablecer
					</Button>
				</Stack>
			</Stack>
		</Formik>
	);
};

export default ResetPasswordForm;
