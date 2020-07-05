/**
 * Date: 6/15/20
 * Time: 12:14 AM
 * @license MIT (see project's LICENSE file)
 */

import {LogBase} from "pig-dam-core";
import {ServerConfiguration, ServiceConfiguration} from "../types";

/**
 * Class instance for any service.
 */
export class ServiceClass <T extends ServiceConfiguration = ServiceConfiguration> {
	public readonly configuration: T;
	public readonly logger: LogBase;

	constructor(configuration: T, logger: LogBase) {
		this.configuration = configuration;
		this.logger = logger;
	}

	public get id(): string {
		return this.configuration.id;
	}

	public get name(): string {
		return this.configuration.name;
	}

	public get server(): ServerConfiguration {
		return this.configuration.server;
	}
}
