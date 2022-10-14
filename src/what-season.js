const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const obj = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10],
};

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('getMilliseconds')) {
    throw new Error('Invalid date!');
  }
  if (Date.parse(date)) {
    let numberMonth = null;
    try {
      numberMonth = date.getMonth();
    } catch {
      throw new Error('Invalid date!');
    }

    numberMonth = date.getMonth();

    // if (numberMonth < 0 || numberMonth > 11 ) {
    //   throw new Error('Invalid date!');
    // }

    for (let key in obj) {
      if (obj[key].includes(numberMonth)) {
        return key;
      }
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
