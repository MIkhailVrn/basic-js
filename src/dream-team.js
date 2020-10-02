const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0)
    return false

  let arrFirstLetters = members.map(name => typeof name === 'string' ? name.replace(/\s/g, '')[0] : '');
  arrFirstLetters = arrFirstLetters.filter(item => item !== '').map(item => item.toUpperCase())
  return arrFirstLetters.sort().join('')
};
