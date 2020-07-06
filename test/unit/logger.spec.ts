/**
 * Date: 6/15/20
 * Time: 12:27 AM
 * @license MIT (see project's LICENSE file)
 */

import {createServiceLogger} from "../../src";

describe("logger", function() {
	describe("createServiceLogger", function() {
		it("should should properly create a service logger", function() {
			const manifest = require("./input/manifest.inline.json");
			const logger = createServiceLogger("factory", manifest);
			expect(logger.applicationId)
				.toEqual(manifest.cluster.factory.id);
			expect(logger.environmentId)
				.toEqual(manifest.environment.name);
			expect(logger.threshold)
				.toEqual(manifest.settings.log.level);
		});
	});
});
