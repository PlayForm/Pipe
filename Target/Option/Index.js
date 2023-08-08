import { readFile as _File } from "fs/promises";
var Index_default = {
  Path: "./Target",
  Logger: 2,
  Pipe: {
    Wrote: async (On) => On.Buffer,
    Read: async (On) => await _File(On.Input, "utf-8"),
    Passed: async (On) => On && true,
    Failed: async (On) => `Error: Cannot process file ${On.Input}!`,
    Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,
    Fulfilled: async (Plan) => Plan.Files > 0 ? `Successfully processed a total of ${Plan.Files} ${Plan.Files === 1 ? "file" : "files"}.` : false,
    Changed: async (Plan) => Plan
  }
};
export {
  Index_default as default
};
//# sourceMappingURL=Index.js.map
