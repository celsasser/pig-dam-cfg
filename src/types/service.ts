/**
 * Date: 6/12/20
 * Time: 11:04 PM
 * @license MIT (see project's LICENSE file)
 */

import {ServerConfiguration} from "./server";

/**
 * Union of all of our service names
 */
export type ServiceName = "factory"|"mongo"|"search"|"server";

/**
 * Properties shared by all modules
 */
export interface ServiceConfiguration {
	id: string;
	name: string;
	server: ServerConfiguration;
}

export interface MongoServiceConfiguration extends ServiceConfiguration {
	database: {
		"urn:db:doc:pig": {
			name: string;
		}
	};
}

export interface SearchServiceConfiguration extends ServiceConfiguration {
	indices: {
		metadata: {
			id: string;
			// todo: what are these types?
			type: string;
		}
	};
}
