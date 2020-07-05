/**
 * Date: 6/12/20
 * Time: 11:07 PM
 * @license MIT (see project's LICENSE file)
 */

import {Severity} from "pig-dam-core";
import {
	MongoServiceConfiguration,
	SearchServiceConfiguration,
	ServiceConfiguration
} from "./service";

/**
 * The entire cluster's deployment configuration
 */
export interface ClusterConfiguration {
	factory: ServiceConfiguration;
	mongo: MongoServiceConfiguration;
	search: SearchServiceConfiguration;
	server: ServiceConfiguration;
}

/**
 * Everything we could want to know about the cluster
 */
export interface ClusterManifest {
	cluster: ClusterConfiguration;
	environment: {
		desc?: string;
		name: string;
	};
	settings: ClusterSettings;
}

export interface ClusterSettings {
	debug: {
		enabled: boolean;
		verbose: boolean;
	};
	log: {
		level: Severity;
	};
}
