import { NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';

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
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({
          error: error.message,
        });
        return;
      }

      if (error instanceof Error) {
        res.status(400).json({
          error: error.message,
        });
        return;
      }

      res.status(500).json({
        error: 'Error generico',
      });
    }
  };

export default makeAPIHandler;
