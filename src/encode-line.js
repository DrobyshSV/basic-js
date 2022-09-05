const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let count = 1;
  let arrStr = str.split('');
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      count++;
    } else {
      if (count !== 1) {
        arr.push(count);
      }
      arr.push(arrStr[i]);
      count = 1;
    }
  }
  return arr.join('');

}

module.exports = {
  encodeLine
};
