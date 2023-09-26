/**
 * @module Apply
 *
 */
export default interface Type {
	(_Function: unknown, Test: unknown): Promise<typeof Test>;
}
