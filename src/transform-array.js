const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr)) { throw new Error(); }
   let subArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--discard-next") {
         i += 1;
      } else if (arr[i] == "--discard-prev") {
         if (i > 0) { subArr.pop(); }
      } else if (arr[i] == "--double-next") {
         if (i < arr.length - 1) { subArr.push(arr[i + 1]); }
      } else if (arr[i] == "--double-prev") {
         if (i > 0) { subArr.push(arr[i - 1]); }
      } else subArr.push(arr[i]);
   }
   return subArr;
};



