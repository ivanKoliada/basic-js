const CustomError = require("../extensions/custom-error");

const chainMaker = {
   getLength() {
      return this.Length;
   },
   addLink(value) {
      throw new CustomError('Not implemented');
      // remove line with error and write your code here
   },
   removeLink(position) {
      throw new CustomError('Not implemented');
      // remove line with error and write your code here
   },
   reverseChain() {
      return this.reverse();
   },
   finishChain() {
      return this.join('~~');
   }
};

module.exports = chainMaker;



