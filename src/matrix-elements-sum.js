const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat(matrix[i]);
  }

  let arrIndexValueNull = [];
  let count = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arrIndexValueNull.includes(index)) {
      if (arr[i] === 0) {
        arrIndexValueNull.push(index);
      } else {
        count += arr[i];
      }
    }
    index = index >= matrix[0].length - 1 ? 0 : index + 1;
  }
  return count;
}

module.exports = {
  getMatrixElementsSum,
};
