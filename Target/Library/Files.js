import Default from "../Option/Index.js";
import By from "./Files/By.js";
import In from "./Files/In.js";
import Not from "./Files/Not.js";
import Pipe from "./Files/Pipe.js";
class Files {
  Pipe = async (Callbacks = Default.Pipe) => await Pipe(this.Plan, Callbacks);
  Not = async (File) => {
    this.Plan.Results = await Not(File, this.Plan.Results);
    return this;
  };
  By = async (File = "**/*") => {
    this.Plan.Results = await By(File, this.Plan.Paths, this.Plan.Results);
    return this;
  };
  In = async (Path = "./") => {
    const Paths = await In(Path, this.Plan.Paths);
    if (Paths instanceof Map) {
      for (const [Input, Output] of Paths) {
        this.Plan.Paths.set(Input, Output);
      }
    }
    return this;
  };
  Plan = {
    Files: 0,
    Debug: 2,
    Info: {},
    Paths: /* @__PURE__ */ new Map(),
    Results: /* @__PURE__ */ new Map(),
    On: {
      Buffer: "",
      After: 0,
      Before: 0,
      Input: "",
      Output: ""
    }
  };
  constructor(Debug = 2) {
    this.Plan.Debug = Debug;
  }
}
export {
  Files as default
};
//# sourceMappingURL=Files.js.map
