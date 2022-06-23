interface ValidationPropertyError {
  validator: (p: any) => boolean;
  message: string;
  type: string;
  path: string;
  value: string;
}

class ValidationError extends Error {
  errors: Record<string, ValidationPropertyError>;

  constructor(
    message: string,
    errors: Record<string, ValidationPropertyError>
  ) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}
export default ValidationError;
