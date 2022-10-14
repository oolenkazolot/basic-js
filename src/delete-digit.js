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

function deleteDigit(n) {
  let str = n + '';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let a = str.substring(0, i) + str.slice(i + 1);
    if (newStr.length) {
      newStr = newStr < a ? a : newStr;
    } else {
      newStr = str.substring(0, i) + str.slice(i + 1);
    }
  }
  return +newStr;
}

module.exports = {
  deleteDigit,
};

console.log(deleteDigit(1001));
