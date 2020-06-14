/**
 * Date: 6/13/20
 * Time: 10:56 PM
 * @license MIT (see project's LICENSE file)
 */

import * as core from "pig-dam-core";
import {getResourcePath, getResourceRoot} from "../../src";

jest.mock("pig-dam-core");
const mockedCore = core as jest.Mocked<typeof core>;

describe("path", function() {
	describe("getResourcePath", function() {
		it("should properly tack resource onto root path", function() {
			mockedCore.getModulesApplicationRoot.mockReturnValue("/root/app");
			expect(getResourcePath("resource.json"))
				.toEqual("/root/res/resource.json");
		});
	});

	describe("getResourceRoot", function() {
		it("should properly assemble the resource root path", function() {
			mockedCore.getModulesApplicationRoot.mockReturnValue("/root/app");
			expect(getResourceRoot())
				.toEqual("/root/res");
		});
	});
});
