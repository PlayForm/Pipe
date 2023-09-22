/**
 * The function 'Exec' is an asynchronous function that executes a command and logs the
 * stdout of the child process.
 * @param {string} Command - The `Command` parameter is a string that represents the
 * command you want to execute. It can be any valid command that can be executed in a
 * terminal or command prompt.
 */
declare const _default: (Command: string, Echo?: false | ((Return: any) => void)) => Promise<void>;
export default _default;
