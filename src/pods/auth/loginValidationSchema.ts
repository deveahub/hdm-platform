import { InferType } from 'yup';

import yup from '@/yup';

import { passwordFieldValidation } from './fieldsValidation';

const loginValidationSchema = yup.object({
	email: yup.string().required().email(),
	password: passwordFieldValidation,
});

export type LoginValidationSchemaValues = InferType<
	typeof loginValidationSchema
>;

export const LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES: LoginValidationSchemaValues =
	{
		email: '',
		password: '',
	};

export default loginValidationSchema;
