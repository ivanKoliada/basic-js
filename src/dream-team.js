const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
   let nameMembers = '';
   return (Array.isArray(arr) && arr.some(e => typeof (e) === 'string')) ? nameMembers = arr.filter(name => typeof (name) === 'string').map(e => e.trim()[0].toUpperCase()).sort().join('') : false;
};



