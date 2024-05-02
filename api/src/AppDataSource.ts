import {DataSource} from "typeorm";
import {User} from "./entity/User";
import {Party} from "./entity/Party";
import {databaseHost, databasePort, databaseUsername, databasePassword, databaseName} from "./config/constants";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: databaseHost,
	port: databasePort,
	username: databaseUsername,
	password: databasePassword,
	database: databaseName,
	synchronize: true,
	logging: false,
	entities: [User, Party],
	migrations: [],
	subscribers: [],
});
