const CustomError = require("../extensions/custom-error");
chain: '';
const chainMaker = {
   getLength() {
      return this.chain.Length;
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
      return this.chain.reverse();
   },
   finishChain() {
      return this.chain;
   }
};

module.exports = chainMaker;







