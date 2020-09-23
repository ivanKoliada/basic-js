const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
   return arr.flat(Infinity).filter(cat => cat === '^^').length;
};
