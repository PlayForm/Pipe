/**
 * The function 'Exec' is an asynchronous function that executes a command and logs the
 * stdout of the child process.
 * @param {string} Command - The `Command` parameter is a string that represents the
 * command you want to execute. It can be any valid command that can be executed in a
 * terminal or command prompt.
 */
export default async (
	Command: string,
	// rome-ignore lint/suspicious/noExplicitAny:
	Echo: false | ((Return: any) => void) = (Return) => console.log(Return)
) => {
	try {
		const Exec = (await import("child_process")).exec(Command);

		Echo && typeof Echo === "function"
			? Exec.stdout?.on("data", (Data) => Echo(Data))
			: {};
	} catch (_Error) {}
};
