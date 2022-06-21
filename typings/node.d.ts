declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_HOST: string;
		NEXT_PUBLIC_SENTRY_DSN: string;
		MONGO_API_USER: string;
		MONGO_API_PASS: string;
	}
}
