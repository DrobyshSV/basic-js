const {NotImplementedError} = require('../extensions/index.js');

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
    matrix = matrix.map((t, index, array) => {
        t = t.map((e, indexE, arrayE) => {
            let arr = [];
            if (arrayE[indexE - 1]) {
                arr.push(arrayE[indexE - 1]);
            }
            if (arrayE[indexE + 1]) {
                arr.push(arrayE[indexE + 1]);
            }
            if (index > 0 && array[index - 1][indexE - 1]) {
                arr.push(array[index - 1][indexE - 1]);
            }
            if (index > 0 && array[index - 1][indexE]) {
                arr.push(array[index - 1][indexE]);
            }
            if (index > 0 && array[index - 1][indexE + 1]) {
                arr.push(array[index - 1][indexE + 1]);
            }
            if (index < matrix.length - 1 && array[index + 1][indexE - 1]) {
                arr.push(array[index + 1][indexE - 1]);
            }
            if (index < matrix.length - 1 && array[index + 1]) {
                arr.push(array[index + 1][indexE]);
            }
            if (index < matrix.length - 1 && array[index + 1][indexE + 1]) {
                arr.push(array[index + 1][indexE + 1]);
            }
            return arr.filter((t) => t === true).length;
        });
        return t;
    });
    return matrix;
}

module.exports = {
    minesweeper
};
