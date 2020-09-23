const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
   let nameMembers = '';
   return (arr.some(e => typeof (e) === 'string')) ? nameMembers = arr.filter(name => typeof (name) === 'string' && name[0] !== ' ').map(e => e[0]).sort().join('') : false;
};
