/**
 * @module Pipe
 * @param {Action} Plan
 * @param {Action} Action
 * @returns {Plan} Plan
 */
export default interface Type {
	(Plan: Plan, Action: Action): Promise<Plan>;
}

import type Action from "../Interface/Action.js";
import type Plan from "../Interface/Plan.js";
