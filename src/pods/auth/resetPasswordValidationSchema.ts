import { InferType } from 'yup';

import { userEmailValidation } from '@/pods/user/fieldValidation';
import yup from '@/yup';

const resetPasswordValidationSchema = yup.object({
  email: userEmailValidation.required(),
});

export type ResetPasswordValidationSchema = InferType<
  typeof resetPasswordValidationSchema
>;

export const RESET_PASSWORD_VALIDATION_SCHEMA_INITIAL_VALUES: ResetPasswordValidationSchema =
  {
    email: '',
  };

export default resetPasswordValidationSchema;
