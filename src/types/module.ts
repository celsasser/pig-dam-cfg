/**
 * Date: 6/12/20
 * Time: 11:04 PM
 * @license MIT (see project's LICENSE file)
 */

import {ServerConfiguration} from "./server";

/**
 * Properties shared by all modules
 */
export interface ModuleConfiguration {
	name: string;
	server: {
		debug: ServerConfiguration;
		docker: ServerConfiguration;
	};
}

export interface MongoModuleConfiguration extends ModuleConfiguration {
	database: {
		"urn:db:doc:pig": {
			name: string;
		}
	}
}

export interface SearchModuleConfiguration extends ModuleConfiguration {
	indices: {
		metadata: {
			id: string;
			// todo: what are these types?
			type: string;
		}
	}
}
