var Not_default = async (Pattern, Files) => {
  const Filters = /* @__PURE__ */ new Set();
  if (typeof Pattern !== "undefined") {
    if (Pattern instanceof Array || Pattern instanceof Set) {
      for (const Patterns of Pattern) {
        Filters.add(Patterns);
      }
    } else {
      Filters.add(Pattern);
    }
  }
  for (const Filter of Filters) {
    for (const File of Files) {
      switch (true) {
        case typeof Filter === "string": {
          if (File[0].match(Filter) || File[1].match(Filter)) {
            Files.delete(File[0]);
          }
          break;
        }
        case typeof Filter === "function": {
          if (Filter(File[0]) || Filter(File[1])) {
            Files.delete(File[0]);
          }
        }
      }
    }
  }
  return Files;
};
export {
  Not_default as default
};
//# sourceMappingURL=Not.js.map
