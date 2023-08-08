import Glob from "fast-glob";
var By_default = async (File, Paths, Results) => {
  for (const [Input, Output] of Paths) {
    for (const _File of await Glob(File, {
      cwd: Input,
      onlyFiles: true
    })) {
      Results.set(`${Output}${_File}`, `${Input}${_File}`);
    }
  }
  return Results;
};
export {
  By_default as default
};
//# sourceMappingURL=By.js.map
