/**
 * Date: 6/14/20
 * Time: 12:53 AM
 * @license MIT (see project's LICENSE file)
 */

import {
	getClusterConfiguration,
	getClusterManifest,
	getServiceConfiguration
} from "../../src";

describe("cluster", function() {
	describe("getClusterConfiguration", function() {
		it("should properly get the cluster definition from the specified manifest", function() {
			const manifest = getClusterManifest(`${__dirname}/input/manifest.reference.json`);
			const cluster = getClusterConfiguration(manifest);
			expect(cluster).toEqual(manifest.cluster);
		});
	});

	describe("getServiceConfiguration", function() {
		it("should properly get the cluster's service definition", function() {
			const manifest = getClusterManifest(`${__dirname}/input/manifest.reference.json`);
			const service = getServiceConfiguration("factory", manifest.cluster);
			expect(service).toEqual(manifest.cluster.factory);
		});
	});
});
