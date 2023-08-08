import { fileURLToPath as __Path } from "url";
import Apply from "../Apply.js";
var In_default = async (Path, Paths) => {
  const _Path = await Apply(
    (Path2) => Path2.endsWith("/") ? Path2 : `${Path2}/`,
    await Apply(
      (url) => url instanceof URL ? __Path(url) : url,
      Path
    )
  );
  if (_Path instanceof Map) {
    for (const [Input, Output] of _Path) {
      Paths.set(Input, Output);
    }
  } else {
    Paths.set(_Path, _Path);
  }
  return Paths;
};
export {
  In_default as default
};
//# sourceMappingURL=In.js.map
