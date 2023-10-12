/**
 * @module Bytes
 *
 */
export default interface Type {
	/**
	 * The function converts a given number of bytes into a human-readable format with appropriate units
	 * (e.g., KB, MB, GB).
	 *
	 * @param Bytes - The `Bytes` parameter is the number of bytes that you want to convert to a
	 * human-readable format.
	 *
	 * @param Decimals - The `Decimals` parameter is an optional parameter that specifies the number
	 * of decimal places to round the result to. If not provided, it defaults to 2.
	 *
	 * @returns a string that represents the given number of bytes in a human-readable format. The format
	 * includes the converted value in the appropriate unit (Bytes, KB, MB, GB, etc.) based on the size of
	 * the input.
	 *
	 */
	(Bytes: number, Decimals?: number): Promise<string>;
}
