import type { Pattern } from "fast-glob";
import type { Executions, Plan, Path, Options } from "../Option/Index.js";
export default class Files {
    Pipe: (Callbacks?: Executions) => Promise<Plan>;
    Not: (Pattern: Options["Exclude"]) => Promise<void>;
    By: (Glob?: Pattern | Pattern[]) => Promise<void>;
    In: (Path?: Path) => Promise<void> | this;
    Plan: Plan;
    constructor(Debug?: Plan["Debug"]);
}
