const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //return matrix.map( array => array.filter(item => item === "^^")).reduce((value, array) => value + array.length, 0)

   const arrOfEars = matrix.map( array => array.filter(item => item === "^^"))
   const count = arrOfEars.reduce((value, array) => value + array.length, 0) || 0
   return count;

};
