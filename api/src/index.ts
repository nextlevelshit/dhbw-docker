import "reflect-metadata";
import debug from "debug";
import {App, shutdown, failOnShutdown} from "./App";
import {UserController} from "./controller/UserController";
import {AppDataSource} from "./AppDataSource";
import {RouteController, Route} from "./config/types";
import {PartyController} from "./controller/PartyController";
import {getRoutesFromMetadata} from "./helper/getRoutesFromMetadata";

const logger = debug("app:i:index");
const verbose = debug("app:v:index");

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

verbose("starting");

App.bootstrap()
	.then(async () => {
		verbose("succesfully started");
		/**
		 * Attach routes for health checks
		 */
		App.attachHealthCheck();
		/**
		 * Init and attach the controllers to the application
		 */
		const controllers: RouteController<any>[] = [
			new UserController(AppDataSource),
			new PartyController(AppDataSource),
		];

		controllers.forEach((controller) => {
			/**
			 * Attach the routes to the application together with the associated prefix
			 */
			const routes = getRoutesFromMetadata(controller);
			App.attachRoutes(routes, controller);
		});
	})
	.catch((e) => {
		/**
		 * Fail the application on startup error
		 */
		logger("failed to start");
		verbose(e);
		failOnShutdown(e);
	});
