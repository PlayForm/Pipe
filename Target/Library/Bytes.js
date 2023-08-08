var Bytes_default = async (Bytes, Decimals = 2) => {
  if (Bytes === 0) {
    return "0 Bytes";
  }
  const K = 1024;
  const I = Math.floor(Math.log(Bytes) / Math.log(K));
  return `${parseFloat(
    (Bytes / K ** I).toFixed(Decimals < 0 ? 0 : Decimals)
  )} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][I]}`;
};
export {
  Bytes_default as default
};
//# sourceMappingURL=Bytes.js.map
