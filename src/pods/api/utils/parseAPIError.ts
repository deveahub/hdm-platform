import { ApiError } from 'next/dist/server/api-utils';

import ValidationError from '@/pods/common/errors/ValidationError';

const parseAPIError = (error: unknown): [number, Record<string, unknown>] => {
  if (error instanceof Error && error.name === 'ValidationError') {
    const validationError = error as ValidationError;
    return [
      400,
      {
        errors: Object.entries(validationError.errors).reduce(
          (acc, [key, { message }]) => ({
            ...acc,
            [key]: message,
          }),
          {}
        ),
      },
    ];
  }

  if (error instanceof ApiError) {
    return [
      error.statusCode,
      {
        error: error.message,
      },
    ];
  }

  if (error instanceof Error) {
    if (error.message.includes('E11000')) {
      const regex = /dup key: { (\w+): .(.+)"/;
      const fields = error.message.match(regex);
      if (fields) {
        return [
          400,
          {
            errors: {
              [fields[1]]: `${fields[2]} ya esta registrado`,
            },
          },
        ];
      }
    }

    return [
      400,
      {
        error: error.message,
      },
    ];
  }

  return [
    500,
    {
      error: 'Error genérico',
    },
  ];
};

export default parseAPIError;
