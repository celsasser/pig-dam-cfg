/**
 * Date: 6/12/20
 * Time: 11:16 PM
 * @license MIT (see project's LICENSE file)
 */
import {loadManifest} from "./manifest";
import {ClusterConfiguration, Manifest, PigDamServer, ServerConfiguration} from "./types";

/**
 * Gets the entire cluster's configuration
 * @throws {Error}
 */
export function getClusterConfiguration(manifest: Manifest = loadManifest()): ClusterConfiguration {
	return manifest.cluster;
}

/**
 * Gets a server's configuration within the cluster
 * @throws {Error}
 */
export function getClusterServerConfiguration(server: PigDamServer, manifest: Manifest = loadManifest()): ServerConfiguration {
	return manifest[server];
}
