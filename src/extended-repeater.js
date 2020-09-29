const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   options['separator'] = options['separator'] || '+';
   options['additionSeparator'] = options['additionSeparator'] || '|';
   if (typeof options['addition'] !== 'string' && typeof str !== 'string') {
      options['addition'] += '';
      str += '';
   }

   let result = '',
      addit = '';

   if (options['addition']) {
      addit = options['addition'];
   } else addit += '';

   if (options['additionRepeatTimes']) {
      addit = (addit + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) + addit;
   } else addit += '';

   if (options['repeatTimes']) {
      result = (str + addit + options['separator']).repeat(options['repeatTimes'] - 1) + str + addit;
   } else result = str + addit;

   return result;
};