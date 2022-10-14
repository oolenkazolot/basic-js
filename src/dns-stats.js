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

function getDNSStats(domains) {
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.');
    let newName = '';
    for (let j = arr.length - 1; j >= 0; j--) {
      newName += '.' + arr[j];
      if (obj[newName]) {
        obj[newName] = obj[newName] + 1;
      } else {
        obj[newName] = 1;
      }
    }
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
