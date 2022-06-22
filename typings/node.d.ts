declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_HOST: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
    MONGO_DB_URL: string;
    API_SECRET_CREATE_TOKEN: string;
  }
}
