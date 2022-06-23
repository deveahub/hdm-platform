import { NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';

import connectDBMiddleware from '@/pods/api/middlewares/connectDBMiddleware';
import UserModel, { UserSchemaInput } from '@/pods/user/UserModel';

import encrypt from '../auth/encrypt';
import sendEmail from '../emails/sendEmail';
import { User } from './types';

const addUserAPI: NextApiHandler<User> = async (req, res) => {
  const { password, ...input } = req.body as UserSchemaInput;
  const user = new UserModel({
    ...input,
    password: await encrypt.password(password),
  });
  await user.save();

  const isEmailSent = sendEmail(
    'new-user',
    {
      ...user.toJSON(),
      password,
    },
    user.email
  );

  if (!isEmailSent)
    throw new ApiError(
      400,
      'El usuario ha sido creado pero no ha podido realizarse la notificación con su información'
    );

  res.json(user);
};

export default connectDBMiddleware(addUserAPI);
