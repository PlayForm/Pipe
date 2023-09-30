# [FilesPipe] 🧪

Allows you to process files in a pipe, simplifying the file operations in your
project.

### Installation

To get started with the `FilesPipe` component, follow these steps:

Install the `FilesPipe` package using npm:

```
npm install -D -E files-pipe
```

Create a new pipe instance using the following code in your Index.ts file:

**`Index.ts`**

```ts
import Files from "files-pipe";

await new Files().In("./Input");
```

### Getting started

With `FilesPipe`, you gain access to the `Pipe` method, enabling you to perform
various actions on files within the pipe. Here's an example of how to use it in
your `Index.ts`:

**`Index.ts`**

```ts
import Files from "files-pipe";

await (
	await (await new Files().In("./Input")).By("**/*.md")
).Pipe({
	// Append some content to all of the text files
	Wrote: (On) => (On.Buffer += "LICENSE [MIT]"),
});
```

### Default Callbacks

Here are the default callbacks provided by `FilesPipe` for file processing:

```ts
import Files from "files-pipe";

await new Files().Pipe({
	// Reads the file into a buffer
	Read: async (On) => await fs.promises.readFile(On.Input, "utf-8"),

	// Writes the buffer into a file
	Wrote: async (On) => On.Buffer,

	// Checks if the file has passed any checks
	Passed: async (On) => On && true,

	// When the file cannot be processed
	Failed: async (Input) => `Error: Cannot process file ${Input}!`,

	// When the file is processed
	Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,

	// When the whole plan is fulfilled
	Fulfilled: async (Plan) =>
		`Successfully processed a total of ${Plan.Files} ${
			Plan.Files === 1 ? "file" : "files"
		}.`,

	// When the plan has changed
	Changed: async (Plan) => Plan,
});
```

### Adding Multiple Paths

You can add multiple paths to your pipe by specifying an array as the `Path`
variable:

**`Index.ts`**

```ts
import Files from "files-pipe";

await new Files().In(["./Input", "./Input2"]);
```

### Input-Output Mapping

Provide a map of paths for different input and output directories:

**`Index.ts`**

```ts
import Files from "files-pipe";

await new Files().In(new Map([["./Input", "./Output"]]));
```

### File Filtering

You can filter files to exclude specific ones from your pipe. A filter can be an
array of regular expressions or a single match. You can also use functions to
match on file names:

**`Index.ts`**

```ts
import Files from "files-pipe";

await new Files().Not([
	"File.txt",
	(File: string) => File === "./Input/File.txt",
]);
```

### Customizing Cache Path

Set the Cache to a different path if your cache path is different from the
default (./Cache). Here's an example:

**`Index.ts`**

```ts
import Files from "files-pipe";

new Files(0);
```

### Controlling Logging

You can control the logging level by setting the `Logger` parameter. The default
value is `2`, but you can set it to `0` if you don't want to see debug messages:

**`Index.ts`**

```ts
import Files from "files-pipe";

new Files(0);
```

[FilesPipe]: https://npmjs.org/files-pipe

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this component.
