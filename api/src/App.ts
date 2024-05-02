import debug from "debug";
import {AppDataSource} from "./AppDataSource";
import {WebApplicationImpl} from "./impl/WebApplicationImpl";
import {port} from "./config/constants";

const logger = debug("app:i:app");
const verbose = debug("app:v:app");

/**
 * The main application instance
 */
export const App = new WebApplicationImpl({
	port,
	dataSource: AppDataSource,
});

/**
 * Shutdown the application gracefully
 */
export const shutdown = () => {
	verbose("> SIGINT/SIGTERM");
	App.teardown()
		.then(() => process.exit(0))
		.catch(failOnShutdown);
};

/**
 * Shutdown the application and fail
 * @param e Error
 */
export const failOnShutdown = (e: Error) => {
	logger("failed to bootstrap application");
	verbose(e);
	process.exit(1);
};
