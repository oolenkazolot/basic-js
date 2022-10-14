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
//  'aabcc', 'adcaa'
function getCommonCharacterCount(s1, s2) {
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (arr.includes(s2[j] + j)) {
          continue;
        } else {
          arr.push(s2[j] + j);
          break;
        }
      } else {
        continue;
      }
    }
  }
  return arr.length;
}

module.exports = {
  getCommonCharacterCount,
};
