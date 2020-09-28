const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
   if (!date) {
      return 'Unable to determine the time of year!';
   } else if (isNaN(date.getTime())) {
      throw new Error('Error');
   } else {
      let numMonth = date.getMonth() + 1;
      return numMonth >= 3 && numMonth <= 5 ? 'spring' : numMonth >= 6 && numMonth <= 8 ? 'summer' : numMonth >= 9 && numMonth <= 11 ? 'autumn' : 'winter';
   }
};
