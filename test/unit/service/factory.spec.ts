/**
 * Date: 6/15/20
 * Time: 10:16 PM
 * @license MIT (see project's LICENSE file)
 */

import {LogBase} from "pig-dam-core";
import {getClusterManifest} from "../../../src";
import {createServiceClass} from "../../../src/service";

describe("service.factory", function() {
	describe("createServiceClass", function() {
		it("should properly create a factory instance", function() {
			const manifest = getClusterManifest(`${__dirname}/../input/manifest.reference.json`);
			const instance = createServiceClass("factory", manifest);
			expect(instance.configuration)
				.toEqual(manifest.cluster.factory);
			expect(instance.id)
				.toEqual(manifest.cluster.factory.id);
			expect(instance.logger)
				.toBeInstanceOf(LogBase);
			expect(instance.server)
				.toEqual(manifest.cluster.factory.server);
		});

		it("should properly create a search instance", function() {
			const manifest = getClusterManifest(`${__dirname}/../input/manifest.reference.json`);
			const instance = createServiceClass("search", manifest);
			expect(instance.configuration)
				.toEqual(manifest.cluster.search);
			expect(instance.id)
				.toEqual(manifest.cluster.search.id);
			expect(instance.logger)
				.toBeInstanceOf(LogBase);
			expect(instance.server)
				.toEqual(manifest.cluster.search.server);
		});
	});
});
