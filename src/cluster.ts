/**
 * Date: 6/12/20
 * Time: 11:16 PM
 * @license MIT (see project's LICENSE file)
 */

import {getClusterManifest} from "./manifest";
import {
	ClusterConfiguration,
	ClusterManifest,
	ServiceConfiguration,
	ServiceName
} from "./types";


/**
 * Gets the entire cluster's configuration
 * @throws {Error}
 */
export function getClusterConfiguration(manifest: ClusterManifest = getClusterManifest()): ClusterConfiguration {
	return manifest.cluster;
}

/**
 * Loads the configuration of the specified service
 * @throws {Error}
 */
export function getServiceConfiguration<T extends ServiceConfiguration>(service: ServiceName, cluster: ClusterConfiguration = getClusterConfiguration()): T {
	return cluster[service] as T;
}
