import type { Pattern } from "fast-glob";
import type { Executions, Plan, Path, Options } from "../Option/Index.js";
export default class Files {
    Pipe: (Callbacks?: Executions) => Promise<Plan>;
    Not: (Pattern: Options["Exclude"]) => Promise<this>;
    By: (Glob?: Pattern | Pattern[]) => Promise<this>;
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Debug?: Plan["Debug"]);
}
