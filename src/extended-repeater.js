const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = `${str}`;
  let res = '';
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const addition = options.addition !== undefined ? `${options.addition}` : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  for (let i = 0; i < additionRepeatTimes; i++) {
    string += addition;
    if (i !== additionRepeatTimes - 1) {
      string += additionSeparator;
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    res += string;
    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }
  return res;
}

module.exports = {
  repeater,
};
