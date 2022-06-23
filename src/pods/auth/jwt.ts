import { sign } from 'jsonwebtoken';

const jwt = {
  signAccess: (
    id: string,
    duration: '1h' | '3h' | '10d',
    hashedPassword: string
  ) =>
    sign(
      {
        _id: id,
      },
      `${process.env.API_SECRET_CREATE_TOKEN}${hashedPassword}`,
      { expiresIn: duration }
    ),
};

export default jwt;
