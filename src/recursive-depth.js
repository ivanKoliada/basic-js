const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr) {
      return 1 + (arr instanceof Array ? arr.reduce(function (max, item) {
         return Math.max(max, test(item));
      }, 0) : -1);
   }
};