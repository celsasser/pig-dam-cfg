/**
 * Date: 6/15/20
 * Time: 12:09 AM
 * @license MIT (see project's LICENSE file)
 */
import {ILog, LogConsole} from "pig-dam-core";
import {getServiceConfiguration} from "./cluster";
import {getClusterManifest} from "./manifest";
import {ServiceName} from "./types";

/**
 * Creates a logger specially designed for YOUR service..
 */
export function createServiceLogger(service: ServiceName, manifest = getClusterManifest()): ILog {
	const configuration = getServiceConfiguration(service, manifest.cluster);
	return new LogConsole({
		applicationId: configuration.id,
		environmentId: manifest.environment.name,
		threshold: manifest.settings.log.level
	});
}
