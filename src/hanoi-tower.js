const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   let newObj = { turns: 0, seconds: 0 };
   newObj.turns = Math.pow(2, disksNumber) - 1;
   newObj.seconds = Math.floor(newObj.turns / turnsSpeed * 3600);
   return newObj;
};

