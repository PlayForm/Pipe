import type { Pattern } from "fast-glob";
import type { Execution, Options, Path, Plan } from "../Option/Index.js";
export default class Files {
    Pipe: (Execution?: Execution) => Promise<Plan>;
    Not: (File: Options["Exclude"]) => Promise<this>;
    By: (File?: Pattern | Pattern[]) => Promise<this>;
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Debug?: Plan["Debug"]);
}
