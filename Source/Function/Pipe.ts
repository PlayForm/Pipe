/**
 * @module Pipe
 *
 */
export default (async (
	...[
		Plan,
		{ Accomplished, Changed, Failed, Fulfilled, Passed, Read, Wrote },
	]: Parameters<Type>
) => {
	let _Plan = Plan;

	for (const [_Output, _Input] of _Plan.Results) {
		_Plan.On.Input = _Input;
		_Plan.On.Output = _Output;

		try {
			_Plan.On.Before = (await stat(_Plan.On.Input)).size;

			if (Read && Wrote) {
				_Plan.On.Buffer = await Read(_Plan.On);
				_Plan.On.Buffer = await Wrote(_Plan.On);

				if (!_Plan.On.Buffer) {
					continue;
				}

				if (Passed && (await Passed(_Plan.On))) {
					try {
						await (await import("node:fs/promises")).access(
							dirname(_Plan.On.Output),
							(await import("node:fs/promises")).constants.W_OK,
						);
					} catch (_Error) {
						await (await import("node:fs/promises")).mkdir(
							dirname(_Plan.On.Output),
							{
								recursive: true,
							},
						);
					}

					await (await import("node:fs/promises")).writeFile(
						_Plan.On.Output,
						_Plan.On.Buffer,
						"utf-8",
					);

					_Plan.On.After = (await stat(_Plan.On.Output)).size;

					if (_Plan.Logger > 0) {
						_Plan.Files++;

						if (Changed) {
							_Plan = await Changed(_Plan);
						}
					}

					if (_Plan.Logger > 1) {
						if (typeof Accomplished === "function") {
							console.log(await Accomplished(_Plan.On));
						}
					}
				}
			}
		} catch (_Error) {
			_Plan.Results.delete(_Plan.On.Output);

			if (_Plan.Logger > 1) {
				if (typeof Failed === "function") {
					console.log(await Failed(_Plan.On, _Error));
				} else {
					console.log(_Error);
				}
			}
		}
	}

	if (_Plan.Logger > 0 && _Plan.Results.size > 0) {
		if (typeof Fulfilled === "function") {
			const Message = await Fulfilled(_Plan);

			if (Message && Message.length > 0) {
				console.log(Message);
			}
		}
	}

	return _Plan;
}) satisfies Type as Type;

import type Type from "../Interface/Pipe.js";

export const { dirname } = await import("node:path");

export const { stat } = await import("node:fs/promises");
