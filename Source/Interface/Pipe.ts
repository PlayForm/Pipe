/**
 * The function `Pipe` takes a `Plan` and an `Action` object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 *
 * @module Pipe
 * @param {Plan} Plan - The `Plan` parameter is an object that represents the execution plan. It
 * contains information about the tasks to be executed and their corresponding inputs and outputs.
 * @param {Action}  - - `Plan`: The plan object that contains the tasks to be executed.
 * @returns The function `Pipe` returns the modified `Plan` object.
 */
export default interface Type {
	(
		Plan: Plan,
		{
			Fulfilled,
			Failed,
			Accomplished,
			Changed,
			Passed,
			Read,
			Wrote,
		}: Action
	): Promise<Plan>;
}

import type Action from "../Interface/Action.js";
import type Plan from "../Interface/Plan.js";

