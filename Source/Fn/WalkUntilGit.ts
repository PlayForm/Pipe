import { constants as Constant } from "fs";
import { access as Access } from "fs/promises";
import { dirname as Dir } from "path";

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
const WalkUntilGit = async (Search: string, From?: string): Promise<string> => {
	const Path = Dir(Search);
	const Original = From ? From : Path;

	if (Path === Search) {
		return Original;
	}

	try {
		await Access(`${Path}/.git`, Constant.R_OK | Constant.W_OK);
		return Path;
	} catch (_Error) {
		return await WalkUntilGit(Path, Original);
	}
};

export default WalkUntilGit;
