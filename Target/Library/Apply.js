var Apply_default = async (Fn, Test) => {
  switch (true) {
    case Test instanceof Map: {
      const Tests = /* @__PURE__ */ new Map();
      for (const [Key, Value] of Test) {
        Tests.set(await Fn(Key), await Fn(Value));
      }
      return Tests;
    }
    case Test instanceof Set: {
      const Tests = /* @__PURE__ */ new Set();
      for (const El of Test) {
        Tests.add(await Fn(El));
      }
      return Tests;
    }
    case Test instanceof Array: {
      const Tests = new Array();
      for (const Index of Test) {
        Tests.push(await Fn(Index));
      }
      return Tests;
    }
    default:
      return await Fn(Test);
  }
};
export {
  Apply_default as default
};
//# sourceMappingURL=Apply.js.map
