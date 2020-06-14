/**
 * Date: 6/13/20
 * Time: 9:37 PM
 * @license MIT (see project's LICENSE file)
 */

/**
 * Gets absolute paths to our environment. The arrangement is assumed to be as follows:
 * [suite root]:
 * - cfg
 * - factory
 * - mongo
 * - server
 * - res
 *
 */

import {join as joinPath, resolve as resolvePath} from "path";
import {getModulesApplicationRoot} from "pig-dam-core";

/**
 * Gets absolute path within `res`.
 */
export function getResourcePath(resource: string): string {
	const resourceRoot = getResourceRoot();
	return joinPath(resourceRoot, resource);
}

/**
 * Gets absolute path of our CONFIGURATION root (not any DAM instance's root)
 */
export function getResourceRoot(): string {
	const applicationRoot = getModulesApplicationRoot();
	return resolvePath(applicationRoot, "../res");
}
