const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (!typeof n === 'number') {
    throw new Error('It"s not a number');
  }
  let res = 0;
  let a = n;
  while (a >= 10) {
    res += a % 10;
    a = Math.floor(a / 10);

    if (a < 10) {
      res += a;
    }
  }
  if (res >= 10) {
    res = getSumOfDigits(res);
  }
  return res;
}

module.exports = {
  getSumOfDigits,
};
