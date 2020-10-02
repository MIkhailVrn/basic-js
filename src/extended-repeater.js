/* const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let additions = Array(options.additionRepeatTimes).fill(options.addition != undefined && options.addition != null ? options.addition.toString() : '')
  let additionsStr = additions.join(options.additionSeparator || '|')
  let strValues = Array(options.repeatTimes).fill((str != undefined ? str.toString() : '') + additionsStr);
  return strValues.join(options.separator || '+')

};
   */

  const CustomError = require("../extensions/custom-error");

  module.exports = function repeater(str, options) {
  
    let additions = Array(options.additionRepeatTimes).fill(options.addition === undefined ? '' : options.addition === null ? 'null' : options.addition.toString())
    let additionsStr = additions.join(options.additionSeparator || '|')
    let strValues = Array(options.repeatTimes).fill((str === undefined ? '' : str === null ? 'null' : str.toString()) + additionsStr);
    return strValues.join(options.separator || '+')
  
  };
    