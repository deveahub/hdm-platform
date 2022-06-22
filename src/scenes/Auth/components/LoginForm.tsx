import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import AnchorLink from '@/components/AnchorLink';
import Button from '@/components/Button';
import FieldSet from '@/components/Fieldset';
import FormCheckBox from '@/components/form/FormCheckBox';
import FormInput from '@/components/form/FormInput';
import Spinner from '@/components/Spinner';
import Stack from '@/components/Stack';
import TextError from '@/components/TextError';
import loginValidationSchema, {
	LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES,
	LoginValidationSchemaValues,
} from '@/pods/auth/loginValidationSchema';
import useLogin from '@/pods/auth/useLogin';
import userAtom from '@/pods/user/userAtom';

const LoginForm = () => {
	const user = useRecoilValue(userAtom);
	const login = useLogin();

	const onSubmit = async (
		loginValues: LoginValidationSchemaValues,
		{ setSubmitting }: FormikHelpers<LoginValidationSchemaValues>
	) => {
		await login(loginValues);
		setSubmitting(false);
	};

	return (
		<Formik
			validationSchema={loginValidationSchema}
			initialValues={LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES}
			onSubmit={onSubmit}
		>
			{({ submitCount, isValid, isSubmitting }) => (
				<Stack fullWidth as={Form} direction="column" spacing={2}>
					<FieldSet>
						<FormInput
							type="email"
							label="Correo electronico"
							name="email"
							placeholder="usuario@correo.com"
							autoComplete="email"
						/>
						<FormInput
							type="password"
							label="Contraseña"
							name="password"
							placeholder="Contraseña"
							autoComplete="current-password"
						/>
						<FormCheckBox name="keepSession" label="Mantener sesión activa" />
					</FieldSet>
					{user.type === 'error' && <TextError>{user.error}</TextError>}
					<Button
						disabled={(Boolean(submitCount) && !isValid) || isSubmitting}
						type="submit"
					>
						{isSubmitting ? <Spinner /> : 'Acceder'}
					</Button>
					<Link shallow href="/auth/reset-password" passHref>
						<AnchorLink primary>He olvidado mi contraseña</AnchorLink>
					</Link>
				</Stack>
			)}
		</Formik>
	);
};

export default LoginForm;
