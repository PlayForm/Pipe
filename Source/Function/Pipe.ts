export default (async (
	Plan,
	{ Fulfilled, Failed, Accomplished, Changed, Passed, Read, Wrote }
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

	for (const [Output, Input] of _Plan.Results) {
		try {
			_Plan.On.Input = Input;
			_Plan.On.Output = Output;

			_Plan.On.Before = (await stat(_Plan.On.Input)).size;

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
}) satisfies Type as Type;

import type Type from "../Interface/Pipe.js";

export const { stat } = await import("fs/promises");

export const { dirname } = await import("path");
