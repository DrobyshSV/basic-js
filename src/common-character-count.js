const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let commonSortedArray = [...arr1,...arr2].sort();
  for (let i = 0; i < commonSortedArray.length; i++) {
    if (commonSortedArray[i] === commonSortedArray[i + 1]) {
      count++;
      i++
    }
  }
  let arr = [count, arr1.length, arr2.length].sort();
  return arr[0]
}

module.exports = {
  getCommonCharacterCount
};
