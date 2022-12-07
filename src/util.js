const throwError = (conditions, errorMsg) => {
  if (conditions) throw new Error(errorMsg);
}

module.exports = throwError;