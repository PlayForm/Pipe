import { constants as Constant } from "fs";
import {
	access as Access,
	writeFile as File,
	mkdir as Make,
	stat as Stat,
} from "fs/promises";
import { dirname as Dir } from "path";
import type { Action, Plan } from "../../Option/Index.js";

/**
 * The function `Pipe` takes a `Plan` and an `Action` object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 * @param {Plan} Plan - The `Plan` parameter is an object that represents the execution plan. It
 * contains information about the tasks to be executed and their corresponding inputs and outputs.
 * @param {Action}  - - `Plan`: The plan object that contains the tasks to be executed.
 * @returns The function `Pipe` returns the modified `Plan` object.
 */
export default async (
	Plan: Plan,
	{ Fulfilled, Failed, Accomplished, Changed, Passed, Read, Wrote }: Action
) => {
	let _Plan = Plan;

	for (const [Output, Input] of _Plan.Results) {
		try {
			_Plan.On.Input = Input;
			_Plan.On.Output = Output;

			_Plan.On.Before = (await Stat(_Plan.On.Input)).size;

			if (Read && Wrote) {
				// @TODO: Before Read check cache, only on read file write is always necessary
				_Plan.On.Buffer = await Read(_Plan.On);

				const Buffer = await Wrote(_Plan.On);

				if (!Buffer) {
					continue;
				}

				_Plan.On.Buffer = Buffer;

				if (Passed && (await Passed(_Plan.On))) {
					try {
						await Access(Dir(_Plan.On.Output), Constant.W_OK);
					} catch (_Error) {
						await Make(Dir(_Plan.On.Output), {
							recursive: true,
						});
					}

					await File(_Plan.On.Output, _Plan.On.Buffer, "utf-8");

					_Plan.On.After = (await Stat(_Plan.On.Output)).size;

					if (_Plan.Debug > 0) {
						_Plan.Files++;

						if (Changed) {
							_Plan = await Changed(_Plan);
						}
					}

					if (_Plan.Debug > 1) {
						if (typeof Accomplished === "function") {
							const Message = await Accomplished(_Plan.On);

							if (Message && Message.length > 0) {
								console.log(Message);
							}
						}
					}
				}
			}
		} catch (_Error) {
			_Plan.Results.delete(Output);

			if (typeof Failed === "function") {
				const Message = await Failed(_Plan.On, _Error);

				if (Message && Message.length > 0) {
					console.log(Message);
				}
			} else {
				if (_Plan.Debug > 1) {
					console.log(_Error);
				}
			}
		}
	}

	if (_Plan.Debug > 0 && _Plan.Results.size > 0) {
		if (typeof Fulfilled === "function") {
			const Message = await Fulfilled(_Plan);

			if (Message && Message.length > 0) {
				console.log(Message);
			}
		}
	}

	return _Plan;
};
