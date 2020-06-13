/**
 * Date: 6/12/20
 * Time: 11:22 PM
 * @license MIT (see project's LICENSE file)
 */
import {ClusterConfiguration} from "./cluster";

export interface Manifest {
	/**
	 * We allow this to be a path in practice. If it is then when we load it
	 * we will load the reference to the cluster.
	 */
	cluster: ClusterConfiguration;
}
