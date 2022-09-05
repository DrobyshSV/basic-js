const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let strOfNumber = n.toString();
  let arrOfNumbers = [];
  for (let i = 0; i <= strOfNumber.length; i++) {
    arrOfNumbers.push(+((strOfNumber.slice(0,i) + (strOfNumber.slice(i + 1,strOfNumber.length)))));
  }
  return arrOfNumbers.sort((a,b) => b - a)[1]
}

module.exports = {
  deleteDigit
};
