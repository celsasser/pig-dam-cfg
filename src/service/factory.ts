/**
 * Date: 6/15/20
 * Time: 12:13 AM
 * @license MIT (see project's LICENSE file)
 */

import {getServiceConfiguration} from "../cluster";
import {createServiceLogger} from "../logger";
import {getClusterManifest} from "../manifest";
import {ServiceConfiguration, ServiceName} from "../types";
import {ServiceClass} from "./class";

/**
 * Creates an instance of ServiceClass for the specified service
 */
export function createServiceClass<T extends ServiceConfiguration>(service: ServiceName, manifest = getClusterManifest()): ServiceClass<T> {
	const logger = createServiceLogger(service, manifest);
	const configuration = getServiceConfiguration<T>(service, manifest.cluster);
	return new ServiceClass<T>(configuration, logger);
}
