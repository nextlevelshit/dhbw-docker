import {DataSource} from "typeorm";
import {User} from "./entity/User";
import {Party} from "./entity/Party";
import {
	databaseHost,
	databasePort,
	databaseUsername,
	databasePassword,
	databaseName,
} from "./config/constants";
import {SeedFakeUsers0000000000100} from "./migration/0000000000100-SeedFakeUsers";
import {SeedFakeParties0000000000100} from "./migration/0000000000101-SeedFakeParties";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: databaseHost,
	port: databasePort,
	username: databaseUsername,
	password: databasePassword,
	database: databaseName,
	subscribers: [],
	logging: true,
	synchronize: true,
	entities: [User, Party],
	migrationsTableName: "migrations",
	migrations: [SeedFakeUsers0000000000100, SeedFakeParties0000000000100],
});
