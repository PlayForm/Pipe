/**
 * The function {@link "Pipe"} takes a {@link "Plan"} and an {@link "Action"} object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 *
 * @module Pipe
 *
 */
export default (async (Plan, Action) => {
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
	// 	// console.log(dirname(Plan.Cache ? fileURLToPath(Plan.Cache) : "./Cache"));
	// 	// console.log(
	// 	// 	resolve(dirname(Plan.Cache ? fileURLToPath(Plan.Cache) : "./Cache"))
	// 	// );
	// }

	// @TODO: Maybe purge results before the whole operation instead of executing the pipe
	// @TODO: Cache invalidation
	// Compare the currently staged file to the one in the cache
	// in the cache store the file as stored in git
	// Map<Output, Latest>
	// Latest: 'commit sha'

	for (const [_Output, _Input] of _Plan.Results) {
		_Plan.On.Input = _Input;
		_Plan.On.Output = _Output;

		try {
			_Plan.On.Before = (await stat(_Plan.On.Input)).size;

			if (Action.Read && Action.Wrote) {
				// await Exec(
				// 	`git --no-pager log --format="H%" --max-count=1 --oneline -- ${Input}`
				// );

				// @TODO: Before Read check cache, only on read file write is always necessary
				_Plan.On.Buffer = await Action.Read(_Plan.On);

				// @TODO: Check cache
				// Fingerprint the whole operation (get function name or something from prototype)
				_Plan.On.Buffer = await Action.Wrote(_Plan.On);

				if (!_Plan.On.Buffer) {
					continue;
				}

				if (Action.Passed && (await Action.Passed(_Plan.On))) {
					try {
						await (
							await import("fs/promises")
						).access(
							dirname(_Plan.On.Output),
							(await import("fs")).constants.W_OK
						);
					} catch (_Error) {
						await (
							await import("fs/promises")
						).mkdir(dirname(_Plan.On.Output), {
							recursive: true,
						});
					}

					await (
						await import("fs/promises")
					).writeFile(_Plan.On.Output, _Plan.On.Buffer, "utf-8");

					_Plan.On.After = (await stat(_Plan.On.Output)).size;

					if (_Plan.Logger > 0) {
						_Plan.Files++;

						if (Action.Changed) {
							_Plan = await Action.Changed(_Plan);
						}
					}

					if (_Plan.Logger > 1) {
						if (typeof Action.Accomplished === "function") {
							const Message = await Action.Accomplished(_Plan.On);

							if (Message && Message.length > 0) {
								console.log(Message);
							}
						}
					}
				}
			}
		} catch (_Error) {
			_Plan.Results.delete(_Plan.On.Output);

			if (typeof Action.Failed === "function") {
				const Message = await Action.Failed(_Plan.On, _Error);

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
		if (typeof Action.Fulfilled === "function") {
			const Message = await Action.Fulfilled(_Plan);

			if (Message && Message.length > 0) {
				console.log(Message);
			}
		}
	}

	return _Plan;
}) satisfies Type as Type;

import type Type from "../Interface/Pipe.js";

export const { stat } = await import("fs/promises");

export const { dirname } = await import("path");
