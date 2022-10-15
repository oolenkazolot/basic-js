const { reporters } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const newRowMatrix = [];
    for (let j = 0; j < row.length; j++) {
      if (row[j]) {
        newRowMatrix.push(1);
        continue;
      }
      let countMine = 0;
      if (row[j - 1]) {
        countMine++;
      }
      if (row[j + 1]) {
        countMine++;
      }
      if (matrix[i + 1] && matrix[i + 1][j]) {
        countMine++;
      }
      if (matrix[i + 1] && matrix[i + 1][j + 1]) {
        countMine++;
      }
      if (matrix[i + 1] && matrix[i + 1][j - 1]) {
        countMine++;
      }
      if (matrix[i - 1] && matrix[i - 1][j]) {
        countMine++;
      }
      if (matrix[i - 1] && matrix[i - 1][j + 1]) {
        countMine++;
      }
      if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        countMine++;
      }
      newRowMatrix.push(countMine);
    }
    res.push(newRowMatrix);
  }
  return res;
}

module.exports = {
  minesweeper,
};
