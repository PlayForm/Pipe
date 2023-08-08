import type { Pattern } from "fast-glob";
import type { Executions, Options, Path, Plan } from "../Option/Index.js";
export default class Files {
    Pipe: (Callbacks?: Executions) => Promise<Plan>;
    Not: (File: Options["Exclude"]) => Promise<this>;
    By: (File?: Pattern | Pattern[]) => Promise<this>;
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Debug?: Plan["Debug"]);
}
