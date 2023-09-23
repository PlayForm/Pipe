import type { Type as Action } from "../Interface/Action.js";
import type { Type as Plan } from "../Interface/Plan.js";

// import Exec from "./Exec.js";
// import WalkUntilGit from "./WalkUntilGit.js";

import { constants as Constant } from "fs";
import {
	access as Access,
	writeFile as File,
	mkdir as Make,
	stat as Stat,
} from "fs/promises";
import { dirname as Dir } from "path";
// import { fileURLToPath } from "url";

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

	// if (Plan.Cache) {
	// 	Exec(
	// 		`cd ${await WalkUntilGit(
	// 			Plan.Cache.Search instanceof URL
	// 				? fileURLToPath(Plan.Cache.Search)
	// 				: Plan.Cache.Search
	// 		)}`,
	// 		false
	// 	);

	// 	try {
	// 		await Make(Plan.Cache.Folder, {
	// 			recursive: true,
	// 		});

	// 		await File(`${Plan.Cache}/.gitkeep`, "");
	// 	} catch (_Error) {}

	// 	// Exec(
	// 	// 	`git --no-pager log --format="H%" --max-count=1 --oneline --name-only -- ${Plan.Cache}`
	// 	// );

	// 	Exec("cd -");

	// 	// await File(`${Plan.Cache}/.test`, "{}");
	// 	// exec("git status", (_Error, Out) => {
	// 	// 	console.log(Out);
	// 	// });

	// 	// Exec('git statu')
	// 	// // File(`${await WalkUntilGit("./Cache")}/.test`, "test");
	// 	// console.log(Plan.Results);
	// 	// console.log(Dir(Plan.Cache ? fileURLToPath(Plan.Cache) : "./Cache"));
	// 	// console.log(
	// 	// 	resolve(Dir(Plan.Cache ? fileURLToPath(Plan.Cache) : "./Cache"))
	// 	// );
	// }

	// @TODO: Maybe purge results before the whole operation instead of executing the pipe
	// @TODO: Cache invalidation
	// Compare the currently staged file to the one in the cache
	// in the cache store the file as stored in git
	// Map<Output, Latest>
	// Latest: 'commit sha'

	for (const [Output, Input] of _Plan.Results) {
		try {
			_Plan.On.Input = Input;
			_Plan.On.Output = Output;

			_Plan.On.Before = (await Stat(_Plan.On.Input)).size;

			if (Read && Wrote) {
				// await Exec(
				// 	`git --no-pager log --format="H%" --max-count=1 --oneline -- ${Input}`
				// );

				// @TODO: Before Read check cache, only on read file write is always necessary
				_Plan.On.Buffer = await Read(_Plan.On);

				// @TODO: Check cache
				// Fingerprint the whole operation (get function name or something from prototype)
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

					if (_Plan.Logger > 0) {
						_Plan.Files++;

						if (Changed) {
							_Plan = await Changed(_Plan);
						}
					}

					if (_Plan.Logger > 1) {
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
				if (_Plan.Logger > 1) {
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
};
