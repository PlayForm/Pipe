/**
 * The function recursively walks through directories until it finds a ".git" folder or reaches the
 * root directory.
 * @param {string} Search - The `Search` parameter is a string that represents the directory path where
 * you want to start searching for a `.git` directory.
 * @param {string} [From] - The "From" parameter is an optional parameter that specifies the starting
 * directory for the search. If provided, the function will start searching for the ".git" directory
 * from this directory. If not provided, the function will start searching from the directory specified
 * by the "Search" parameter.
 * @returns The function `WalkUntilGit` returns a promise that resolves to a string.
 */
export const _Function = async (
	Search: string,
	From?: string
): Promise<string> => {
	const Path = (await import("path")).dirname(Search);
	const Original = From ? From : Path;

	if (Path === Search) {
		return Original;
	}

	try {
		await (
			await import("fs/promises")
		).access(`${Path}/.git`, (await import("fs")).constants.R_OK);

		return Path;
	} catch (_Error) {
		return await _Function(Path, Original);
	}
};

export default _Function;
