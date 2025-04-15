import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import type File from "../Interface/File.js";
import type Interface from "../Interface/Pipe.js";
import type Plan from "../Interface/Plan.js";

/**
 * @module Pipe
 *
 */
export default (async (
	...[Plan, { Changed, Read, Wrote, Passed, Accomplished, Failed, Fulfilled }]
) => {
	let Current = Promise.resolve(Plan);

	const Update = async (On: File): Promise<Plan> => {
		Current = Current.then(async (Latest) => {
			if (Changed) {
				return await Changed({ ...Latest, On });
			}

			return Latest;
		});

		return Current;
	};

	const _Promise = Array.from(Plan.Results.entries()).map(
		async ([Output, Input]) => {
			const On: File = {
				Input,
				Output,
				After: 0,
				Before: 0,
				Buffer: "",
			};

			try {
				On.Before = (await stat(On.Input)).size;

				if (Read && Wrote) {
					On.Buffer = await Read(On);

					On.Buffer = await Wrote(On);

					if (!On.Buffer) {
						return;
					}

					if (Passed && !(await Passed(On))) {
						return;
					}

					await mkdir(dirname(On.Output), { recursive: true });

					await writeFile(On.Output, On.Buffer, "utf-8");

					On.After = (await stat(On.Output)).size;

					Plan.File++;

					Plan = await Update(On);

					if (Plan.Logger > 1 && typeof Accomplished === "function") {
						const Message = await Accomplished(On);

						if (Message) {
							console.log(Message);
						}
					}
				}
			} catch (_Error) {
				Plan.Results.delete(Output);

				if (Plan.Logger > 1 && Failed && typeof Failed === "function") {
					const Message = await Failed(On, _Error);

					if (Message) {
						console.log(Message);
					}
				}
			}
		},
	);

	await Promise.allSettled(_Promise);

	if (
		Plan.Logger > 0 &&
		Plan.Results.size > 0 &&
		typeof Fulfilled === "function"
	) {
		const Message = await Fulfilled(Plan);

		if (Message) {
			console.log(Message);
		}
	}

	return await Current;
}) satisfies Interface as Interface;
