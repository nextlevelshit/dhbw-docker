import {DataSource} from "typeorm";
import {User} from "./entity/User";
import {Party} from "./entity/Party";
import {
	databaseHost,
	databasePort,
	databaseUsername,
	databasePassword,
	databaseName,
	isDevelopment,
} from "./config/constants";
import {SeedFakeUsers0000000000100} from "./migration/0000000000100-SeedFakeUsers";

const additionalOptions = isDevelopment
	? {
			// Development environment
			logging: true,
			synchronize: true,
			migrations: [SeedFakeUsers0000000000100],
		}
	: {
			// Production environment
			logging: false,
			synchronize: false,
			migrations: [],
		};

export const AppDataSource = new DataSource({
	type: "postgres",
	host: databaseHost,
	port: databasePort,
	username: databaseUsername,
	password: databasePassword,
	database: databaseName,
	entities: [User, Party],
	migrationsTableName: "migrations",
	subscribers: [],
	...additionalOptions,
});
