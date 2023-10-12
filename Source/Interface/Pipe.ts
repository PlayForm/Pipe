/**
 * @module Pipe
 *
 */
export default interface Type {
	/**
	 *
	 * The function {@link "Pipe"} takes a {@link "Plan"} and an {@link "Action"} object as input, and performs a series of
	 * operations based on the plan, handling various callbacks and error handling along the way.
	 *
	 * @param {Action} Plan
	 *
	 * @param {Action} Action
	 *
	 * @returns {Plan} Plan
	 */
	(Plan: Plan, Action: Action): Promise<Plan>;
}

import type Action from "../Interface/Action.js";
import type Plan from "../Interface/Plan.js";
