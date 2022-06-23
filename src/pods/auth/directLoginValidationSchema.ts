import { InferType } from 'yup';

import { userEmailValidation } from '@/pods/user/fieldValidation';
import yup from '@/yup';

const directLoginValidationSchema = yup.object({
  email: userEmailValidation.required(),
});

export type DirectLoginValidationSchemaValues = InferType<
  typeof directLoginValidationSchema
>;

export const DIRECT_LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES: DirectLoginValidationSchemaValues =
  {
    email: '',
  };

export default directLoginValidationSchema;
