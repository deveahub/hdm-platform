import { NextApiHandler } from 'next';

import parseAPIError from './parseAPIError';

type Method = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

const makeAPIHandler =
  (handlers: Partial<Record<Method, NextApiHandler>>): NextApiHandler =>
  async (...props) => {
    const req = props[0];
    const res = props[1];
    try {
      const handler = handlers[req.method as Method];
      if (!handler) {
        res.status(405).json({
          error: 'Metodo HTTP no declarado',
        });
        return;
      }

      await handler(...props);
    } catch (error) {
      const [status, properError] = parseAPIError(error);
      res.status(status).json(properError);
    }
  };

export default makeAPIHandler;
