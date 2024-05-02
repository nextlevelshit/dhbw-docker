import {RouteController, Route} from "../config/types";
import {routesKey, prefixKey} from "../config/constants";

/**
 * Retrieve the routes from the controller
 * @param controller
 */
export const getRoutesFromMetadata = (controller: RouteController<any>) => {
	/**
	 * Retrieve the routes from the controller
	 */
	const routesWithoutPrefix = Reflect.getMetadata(
		routesKey,
		controller.constructor,
	) as Route[];
	/**
	 * Retrieve the prefix from the controller
	 */
	const prefix = Reflect.getMetadata(
		prefixKey,
		controller.constructor,
	) as string;
	/**
	 * Prepend the associated prefix to each route
	 */
	return routesWithoutPrefix.map(
		(route) =>
			({
				...route,
				path: `${prefix}${route.path}`,
			}) as Route,
	);
}