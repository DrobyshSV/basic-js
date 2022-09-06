const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
 let newArr = domains.map(t=> {
     t = t.split('.');
     let arr = [];
     for (let i = 0; i < t.length; i++){
         arr.push('.' + t.slice(i).reverse().join('.'));
     }
     return arr;
 }).flat().sort();
    let obj = {};
    newArr.map(t=> {
        obj.hasOwnProperty(t) ? obj[t]++ : obj[t] = 1
    })
    return obj
}

module.exports = {
  getDNSStats
};
