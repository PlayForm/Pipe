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
export declare const _Function: (Search: string, From?: string) => Promise<string>;
export default _Function;
