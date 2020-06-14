/**
 * Date: 6/14/20
 * Time: 12:18 AM
 * @license MIT (see project's LICENSE file)
 */

import {getClusterManifest} from "../../src";

describe("manifest", function() {
	describe("getClusterManifest", function() {
		it("should load a manifest with an inline cluster configuration", function() {
			const result = getClusterManifest(`${__dirname}/input/manifest.inline.json`);
			expect(result)
				.toEqual(require("./expectations/manifest.json"));
		});

		it("should load a manifest with a reference to a cluster configuration", function() {
			const result = getClusterManifest(`${__dirname}/input/manifest.reference.json`);
			expect(result)
				.toEqual(require("./expectations/manifest.json"));
		});

		it("should throw an error if manifest cannot be found", function() {
			expect(getClusterManifest.bind(null, "dne.json"))
				.toThrow("unable to load manifest");
		});
	});
});
