import { NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';

import connectDBMiddleware from '@/pods/api/middlewares/connectDBMiddleware';
import userModel from '@/pods/user/UserModel';

import sendEmail from '../emails/sendEmail';
import { AUTH_TOKEN_COOKIE } from './cookies';
import directLoginValidationSchema from './directLoginValidationSchema';
import jwt from './jwt';
import { DirectLoginAPIResponse } from './types';

const directLoginAPI: NextApiHandler<DirectLoginAPIResponse> = async (
  req,
  res
) => {
  const directLoginInput = await directLoginValidationSchema.validate(
    req.body || {}
  );

  const user = await userModel.findOne({
    email: directLoginInput.email,
  });

  if (!user)
    throw new ApiError(404, 'El usuario no esta registrado en la plataforma');

  const token = jwt.signAccess(user._id, '1h', user.password);
  const isEmailSent = sendEmail(
    'direct-login',
    {
      url: `${req.headers.origin}?${AUTH_TOKEN_COOKIE}=${token}`,
      name: user.name,
    },
    user.email
  );

  if (!isEmailSent)
    throw new ApiError(
      400,
      'No ha podido realizarse la notificación, por favor intentalo de nuevo'
    );

  res.json({
    success: true,
  });
};

export default connectDBMiddleware(directLoginAPI);
