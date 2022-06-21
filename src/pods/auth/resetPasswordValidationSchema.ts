import { InferType } from 'yup';

import yup from '@/yup';

const resetPasswordValidationSchema = yup.object({
	email: yup.string().required(),
});

export type ResetPasswordValidationSchema = InferType<
	typeof resetPasswordValidationSchema
>;

export const RESET_PASSWORD_VALIDATION_SCHEMA_INITIAL_VALUES: ResetPasswordValidationSchema =
	{
		email: '',
	};

export default resetPasswordValidationSchema;
