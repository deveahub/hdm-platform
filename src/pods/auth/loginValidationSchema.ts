import { InferType } from 'yup';

import { userEmailValidation } from '@/pods/user/fieldValidation';
import yup from '@/yup';

import {
	keepSessionFieldValidation,
	passwordFieldValidation,
} from './fieldsValidation';

const loginValidationSchema = yup.object({
	email: userEmailValidation.required(),
	password: passwordFieldValidation,
	keepSession: keepSessionFieldValidation,
});

export type LoginValidationSchemaValues = InferType<
	typeof loginValidationSchema
>;

export const LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES: LoginValidationSchemaValues =
	{
		email: '',
		password: '',
		keepSession: false,
	};

export default loginValidationSchema;
