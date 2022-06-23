import mongoose from 'mongoose';

import { COMMON_TRANSLATIONS } from '@/yup';

import { passwordFieldValidation } from '../auth/fieldsValidation';
import { userEmailValidation, userPhoneValidation } from './fieldValidation';
import { User } from './types';

export interface UserSchemaInput extends User {
  password: string;
}

const UserSchema = new mongoose.Schema<UserSchemaInput>(
  {
    email: {
      type: String,
      unique: true,
      validate: {
        validator: (p: string) =>
          userEmailValidation.required().validateSync(p),
      },
      required: [true, COMMON_TRANSLATIONS.mixed.required],
    },
    phone: {
      type: String,
      required: [true, COMMON_TRANSLATIONS.mixed.required],
      validate: {
        validator: (p: string) => userPhoneValidation.validate(p),
      },
    },
    name: {
      type: String,
      required: [true, COMMON_TRANSLATIONS.mixed.required],
    },
    surname: {
      type: String,
      required: [true, COMMON_TRANSLATIONS.mixed.required],
    },
    password: {
      type: String,
      validate: {
        validator: (p: string) => passwordFieldValidation.validate(p),
      },
      required: [true, COMMON_TRANSLATIONS.mixed.required],
    },
    alias: {
      type: String,
      required: [true, COMMON_TRANSLATIONS.mixed.required],
    },
  },
  { timestamps: true }
);

export type UserSchemaData = mongoose.InferSchemaType<typeof UserSchema>;

const loadModel = () => mongoose.model('User', UserSchema);

const UserModel = (mongoose.models.User || loadModel()) as ReturnType<
  typeof loadModel
>;

export default UserModel;
