import { InferType } from 'yup';

import {
  userEmailValidation,
  userNameValidation,
  userPhoneValidation,
  userSurnameValidation,
} from '@/pods/user/fieldValidation';
import yup from '@/yup';

import { passwordFieldValidation } from '../auth/fieldsValidation';

const userValidationSchema = yup.object({
  email: userEmailValidation.required(),
  password: passwordFieldValidation.required(),
  phone: userPhoneValidation.required(),
  name: userNameValidation.required(),
  surname: userSurnameValidation.required(),
});

export type UserValidationSchemaValues = InferType<typeof userValidationSchema>;

export const USER_VALIDATION_SCHEMA_INITIAL_VALUES: UserValidationSchemaValues =
  {
    email: '',
    password: '',
    phone: '',
    name: '',
    surname: '',
  };

export default userValidationSchema;
