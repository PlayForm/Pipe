/**
 * @module Pipe
 *
 */
export default (async (
	...[
		Plan,
		{ Accomplished, Changed, Failed, Fulfilled, Passed, Read, Wrote },
	]: Parameters<Interface>
) => {
	for (const [_Output, _Input] of Plan.Results) {
		Plan.On.Input = _Input;
		Plan.On.Output = _Output;

		try {
			Plan.On.Before = (await stat(Plan.On.Input)).size;

			if (Read && Wrote) {
				Plan.On.Buffer = await Read(Plan.On);
				Plan.On.Buffer = await Wrote(Plan.On);

				if (!Plan.On.Buffer) {
					continue;
				}

				if (Passed && (await Passed(Plan.On))) {
					try {
						await (
							await import("fs/promises")
						).access(
							dirname(Plan.On.Output),
							(await import("fs/promises")).constants.W_OK
						);
					} catch (_Error) {
						await (
							await import("fs/promises")
						).mkdir(dirname(Plan.On.Output), {
							recursive: true,
						});
					}

					await (
						await import("fs/promises")
					).writeFile(Plan.On.Output, Plan.On.Buffer, "utf-8");

					Plan.On.After = (await stat(Plan.On.Output)).size;

					if (Plan.Logger > 0) {
						Plan.File++;

						if (Changed) {
							Plan = await Changed(Plan);
						}
					}

					if (Plan.Logger > 1) {
						if (typeof Accomplished === "function") {
							console.log(await Accomplished(Plan.On));
						}
					}
				}
			}
		} catch (_Error) {
			Plan.Results.delete(Plan.On.Output);

			if (Plan.Logger > 1) {
				if (typeof Failed === "function") {
					console.log(await Failed(Plan.On, _Error));
				} else {
					console.log(_Error);
				}
			}
		}
	}

	if (Plan.Logger > 0 && Plan.Results.size > 0) {
		if (typeof Fulfilled === "function") {
			const Message = await Fulfilled(Plan);

			if (Message && Message.length > 0) {
				console.log(Message);
			}
		}
	}

	return Plan;
}) satisfies Interface as Interface;

import type Interface from "@Interface/Pipe.js";

export const { dirname } = await import("path");

export const { stat } = await import("fs/promises");
