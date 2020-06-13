/**
 * Date: 6/12/20
 * Time: 11:22 PM
 * @license MIT (see project's LICENSE file)
 */

import {
	parse as parsePath
} from "path";
import {getModulesApplicationRoot, PigError} from "pig-dam-core";
import {Manifest} from "./types";

/**
 * Loads the manifest pointed to by `path`
 * @throws {Error}
 */
export function loadManifest(path: string = `${getModulesApplicationRoot()}/manifest.json`): Manifest {
	let manifest: string;
	try {
		manifest = require(path);
	} catch(error) {
		throw new PigError({
			error,
			message: `unable to load manifest "${path}" - ${error.message}`
		});
	}
	if(typeof manifest.cluster === "string") {
		try {
			manifest.cluster = require(`${parsePath(path).dir}/${manifest.cluster}`);
		} catch(error) {
			throw new PigError({
				error,
				message: `unable to load manifest's cluster "${path}" - ${error.message}`
			});
		}
	}
	return manifest;
}
