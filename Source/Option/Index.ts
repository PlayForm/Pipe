import type { Pattern } from "fast-glob";
import { readFile as _File } from "fs/promises";
import type { Stream } from "stream";

export type Debug = 0 | 1 | 2;

export type Buffer =
	| string
	| NodeJS.ArrayBufferView
	| Iterable<string | NodeJS.ArrayBufferView>
	| AsyncIterable<string | NodeJS.ArrayBufferView>
	| Stream;

export interface Execution {
	Fulfilled?: boolean | ((Plan: Plan) => Promise<false | string>);

	Failed?:
		| boolean
		| ((Input: File, _Error: unknown) => Promise<false | string>);

	Accomplished?: boolean | ((On: File) => Promise<false | string>);

	Changed?: (Plan: Plan) => Promise<Plan>;

	Passed?: (On: File) => Promise<Boolean>;

	Read?: (On: File) => Promise<Buffer>;

	Wrote?: (On: File) => Promise<Buffer>;
}

export type Exclude = string | RegExp | ((File: string) => boolean);

export type Path = string | URL | Map<string | URL, string | URL> | false;

export interface Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Path?: Path | Path[] | Set<Path>;

	Exclude?: Exclude | Exclude[] | Set<Exclude>;

	Files?: Pattern | Pattern[];

	Type?: string;

	Pipe?: Execution;

	Logger?: Debug;
}

// Results.set(`${Output}${File}`, `${Input}${File}`)
export interface Plan {
	Debug: Debug;

	Files: number;

	// rome-ignore lint/suspicious/noExplicitAny:
	Info: any;

	Paths: Map<Dir["Input"], Dir["Output"]>;

	Results: Map<
		`${Dir["Output"]}${File["Output"]}`,
		`${Dir["Input"]}${File["Input"]}`
	>;

	On: File;
}

export interface Dir {
	Input: string;

	Output: string;
}

export interface File {
	Input: string;

	Output: string;

	After: number;

	Before: number;

	Buffer: Buffer;
}

export default {
	Path: "./Target",
	Logger: 2,
	Pipe: {
		Wrote: async (On) => On.Buffer,
		Read: async (On) => await _File(On.Input, "utf-8"),
		Passed: async (On) => On && true,
		Failed: async (On) => `Error: Cannot process file ${On.Input}!`,
		Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully processed a total of ${Plan.Files} ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		Changed: async (Plan) => Plan,
	},
} satisfies Options;
