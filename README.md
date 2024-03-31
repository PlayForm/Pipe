# 🧪 [FilePipe]

`FilePipe` allows you to process files in a pipeline, making it easy to perform
various actions on them.

### Installation

To get started with `FilePipe`, follow these steps:

Install the `FilePipe` package using npm:

```sh
npm install -D -E @playform/file-pipe
```

Create a new pipe instance using the following code in your Index.ts file:

**`Index.ts`**

```ts
await new (await import("@playform/file-pipe")).default().In("./Input");
```

### Getting started

With `FilePipe`, you can use the Pipe method to perform actions on files within
the pipe. Here's an example of how to use it in your Index.ts:

**`Index.ts`**

```ts
await(
	await(await new (await import("@playform/file-pipe")).default().In("./Input")).By(
		"**/*.md"
	)
).Pipe({
	// Append some content to all of the text files
	Wrote: (On) => (On.Buffer += "LICENSE [MIT]"),
});
```

### Default Callbacks

`FilePipe` provides default callbacks for file processing. These callbacks can
be customized to suit your specific needs. Here are the default callbacks:

```ts
await new (await import("@playform/file-pipe")).default().Pipe({
	// Read the file into a buffer
	Read: async ({ Input }) => await fs.promises.readFile(Input, "utf-8"),

	// Wrote the buffer into a file
	Wrote: async ({ Buffer }) => Buffer,

	// Passed the file through a check
	Passed: async (On) => On && true,

	// Failed processing the file
	Failed: async ({ Input }) => `Error: Cannot process file ${Input}!`,

	// Accomplished processing the file
	Accomplished: async ({ Input, Output }) =>
		`Processed ${Input} in ${Output}.`,

	// Fulfilled the whole plan
	Fulfilled: async ({ File }) =>
		`Successfully processed a total of ${File} ${
			File === 1 ? "file" : "files"
		}.`,

	// Changed the plan
	Changed: async (Plan) => Plan,
});
```

### Add Multiple Paths

You can add multiple paths to your pipe by specifying an array as the `Path`
variable:

**`Index.ts`**

```ts
await new (await import("@playform/file-pipe")).default().In(["./Input", "./Input2"]);
```

### Input-Output Mapping

`FilePipe` will allow you to provide a map of paths for different input and
output directories, making it easy to control where files are read from and
written to:

**`Index.ts`**

```ts
await new (await import("@playform/file-pipe")).default().In(
	new Map([["./Input", "./Output"]])
);
```

### File Filtering

You can filter files to exclude specific ones from your `FilePipe`. Filters can
be an array of regular expressions or a single match. You can also use functions
to match on file names:

**`Index.ts`**

```ts
await new (await import("@playform/file-pipe")).default().Not([
	"File.txt",
	(File: string) => File === "./Input/File.txt",
]);
```

### Controlling Logging

You can control the logging level by setting the `Logger` parameter. The default
value is `2`, but you can set it to `0` if you don't want to see debug messages:

**`Index.ts`**

```ts
new (await import("@playform/file-pipe")).default(0);
```

[FilePipe]: https://npmjs.org/@playform/file-pipe

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this component.
