/**
 * Date: 6/12/20
 * Time: 11:07 PM
 * @license MIT (see project's LICENSE file)
 */


import {
	ModuleConfiguration,
	SearchModuleConfiguration,
	MongoModuleConfiguration
} from "./module";

export interface ClusterConfiguration {
	factory: ModuleConfiguration;
	mongo: MongoModuleConfiguration;
	search: SearchModuleConfiguration;
	server: ModuleConfiguration;
}
