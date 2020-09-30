const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.some((item) => Array.isArray(item))) {
      arr = arr.flat();
      return 1 + this.calculateDepth(arr);
    } else {
      return 1;
    }
  }
};