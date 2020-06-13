/**
 * Date: 6/12/20
 * Time: 11:05 PM
 * @license MIT (see project's LICENSE file)
 */

export enum PigDamServer {
	Factory = "factory",
	Mongo = "mongo",
	Search = "search"
}

export interface ServerConfiguration {
	port: number;
	host: string;
}
