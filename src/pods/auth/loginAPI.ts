import { NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';

import connectDBMiddleware from '@/pods/api/middlewares/connectDBMiddleware';
import userModel from '@/pods/user/UserModel';

import encrypt from './encrypt';
import jwt from './jwt';
import loginValidationSchema from './loginValidationSchema';
import { LoginAPIResponse } from './types';

const loginAPI: NextApiHandler<LoginAPIResponse> = async (req, res) => {
  const loginValues = await loginValidationSchema.validate(req.body || {});
  const user = await userModel.findOne({
    email: loginValues.email,
  });
  if (!user) {
    throw new ApiError(401, 'Usuario no encontrado');
  }

  const isCorrectPassword = await encrypt.compare(
    loginValues.password,
    user.password
  );

  if (!isCorrectPassword) {
    throw new ApiError(401, 'Contraseña incorrecta');
  }

  const token = jwt.signAccess(
    user._id,
    loginValues.keepSession ? '10d' : '3h',
    user.password
  );

  res.json({
    ...user.toJSON(),
    token,
  });
};

export default connectDBMiddleware(loginAPI);
