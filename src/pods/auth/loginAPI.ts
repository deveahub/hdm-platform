import jwt from 'jsonwebtoken';
import { NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';

import connectDBMiddleware from '@/pods/api/middlewares/connectDBMiddleware';
import { LoginAPIResponse } from '@/pods/user/types';
import userModel from '@/pods/user/userModel';

import encrypt from './encrypt';
import loginValidationSchema from './loginValidationSchema';

const loginAPI: NextApiHandler<LoginAPIResponse> = async (req, res) => {
  const loginValues = await loginValidationSchema.validate(req.body);
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

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.API_SECRET_CREATE_TOKEN,
    { expiresIn: loginValues.keepSession ? '10d' : '1h' }
  );

  res.json({
    ...user.toJSON(),
    token,
  });
};

export default connectDBMiddleware(loginAPI);
