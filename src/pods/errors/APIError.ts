class APIError extends Error {
  public status: number = 400;

  constructor(msg: string, status?: number) {
    super(msg);
    this.name = 'APIError';
    this.status = status || 400;
  }
}

export default APIError;
