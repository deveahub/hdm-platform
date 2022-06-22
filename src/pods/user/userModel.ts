import mongoose, { Model } from 'mongoose';

import { userEmailValidation, userPhoneValidation } from './fieldValidation';
import { User } from './types';

interface UserSchema extends User {
  password: string;
}

const userSchema = new mongoose.Schema<UserSchema>({
  email: {
    type: String,
    validate: userEmailValidation.required().isValidSync,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: userPhoneValidation.required().isValidSync,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const loadModel = () => mongoose.model('User', userSchema);

export default (mongoose.models.User || loadModel()) as ReturnType<
  typeof loadModel
>;
