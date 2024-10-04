import type Interface from "../Interface/Bytes.js";

/**
 * @module Bytes
 *
 */
export default ((...[Bytes, Decimals = 2.0]: Parameters<Interface>) => {
	if (Bytes === 0) {
		return "0 Bytes";
	}

	const I = Math.floor(Math.log(Bytes) / Math.log(Kilobyte));

	return `${Number.parseFloat(
		(Bytes / Kilobyte ** I).toFixed(Decimals < 0 ? 0 : Decimals),
	)} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][I]}`;
}) satisfies Interface as Interface;

export const Kilobyte = 1024;
