export const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
export const isDevelopment = "production" !== process.env.NODE_ENV;
export const routesKey = Symbol("routes");
export const prefixKey = Symbol("prefix");
export const databaseHost = process.env.DATABASE_HOST!;
export const databaseUsername = process.env.DATABASE_USERNAME!;
export const databasePassword = process.env.DATABASE_PASSWORD! as string;
export const databaseName = process.env.DATABASE_NAME!;
export const databasePort = Number(process.env.DATABASE_PORT!);
