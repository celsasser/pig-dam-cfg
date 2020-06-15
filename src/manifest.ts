/**
 * Date: 6/12/20
 * Time: 11:22 PM
 * @license MIT (see project's LICENSE file)
 */

import * as _ from "lodash";
import {parse as parsePath, resolve as resolvePath} from "path";
import {PigError} from "pig-dam-core";
import {getResourcePath} from "./path";
import {
	ClusterConfiguration,
	ClusterManifest,
	ClusterSettings,
	ServerConfiguration
} from "./types";

/**
 * The following types match the schema of our manifest and clusters.
 * But it's not the schema we use internally. We refine the data and reduce
 * it down to absolute server hosts and ports. We don't want to share these types.
 */
type DeploymentState = "container"|"debug";

interface InternalClusterConfiguration {
	factory: InternalServiceConfiguration;
	mongo: InternalServiceConfiguration;
	search: InternalServiceConfiguration;
	server: InternalServiceConfiguration;
}

interface InternalClusterDeployment {
	factory?: DeploymentState;
	mongo?: DeploymentState;
	search?: DeploymentState;
	server?: DeploymentState;
}

interface InternalClusterManifest {
	/**
	 * We allow this to be a path in practice. If it is then when we load it
	 * we will load the reference to the cluster.
	 */
	cluster: InternalClusterConfiguration|string;
	deployment?: InternalClusterDeployment;
	environment: {
		desc?: string;
		name: string;
	};
	settings: ClusterSettings;
}

/**
 * Properties shared by all modules
 */
interface InternalServiceConfiguration {
	name: string;
	server: {
		debug: ServerConfiguration;
		docker: ServerConfiguration;
	};
}

/********************
 * Public Interface
 ********************/
/**
 * Loads the manifest pointed to by `path`
 * @throws {Error}
 */
export function getClusterManifest(path: string = getResourcePath("manifest.json")): ClusterManifest {
	const manifest = loadManifestConfiguration(path);
	const cluster = normalizeClusterConfiguration(manifest.cluster as InternalClusterConfiguration, manifest.deployment);
	return {
		cluster,
		environment: manifest.environment,
		settings: manifest.settings
	};
}

/********************
 * Private Interface
 ********************/
/**
 * Loads the cluster configuration pointed to by `clusterPath`
 * @throws {Error}
 */
function loadClusterConfiguration(path: string): InternalClusterConfiguration {
	try {
		return require(path);
	} catch(error) {
		throw new PigError({
			error,
			message: `unable to load cluster configuration "${path}" - ${error.message}`
		});
	}
}

/**
 * Loads the manifest pointed to by `path`. And will make sure the `cluster` is loaded
 * if it is referenced by a path.
 * @throws {Error}
 */
export function loadManifestConfiguration(path: string): InternalClusterManifest {
	try {
		const manifest: InternalClusterManifest = require(path);
		if(typeof manifest.cluster === "string") {
			// paths should be relative to the manifest
			const clusterPath = resolvePath(parsePath(path).dir, manifest.cluster);
			manifest.cluster = loadClusterConfiguration(clusterPath);
		}
		return manifest;
	} catch(error) {
		throw new PigError({
			error,
			message: `unable to load manifest "${path}" - ${error.message}`
		});
	}
}

/**
 * Transforms our internal representation into one that reflects the current deployment. Which means:
 * - we flatten the server structure so that each service points to its state as per the `deployment` spec.
 */
function normalizeClusterConfiguration(configuration: InternalClusterConfiguration, deployment?: InternalClusterDeployment): ClusterConfiguration {
	configuration = _.cloneDeep(configuration);
	_.forEach(configuration, (value: any, key: string) => {
		if("server" in value) {
			value.server = (_.get(deployment, key) === "debug")
				? value.server.debug
				: value.server.docker;
		}
	});
	return configuration as unknown as ClusterConfiguration;
}

