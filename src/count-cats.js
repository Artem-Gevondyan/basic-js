const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  const ears = '^^';
  let result = 0;
  for (i = 0; i < cats.length; i++) {
    for (n = 0; n < cats[i].length; n++) {
      if (cats[i][n] === ears) {
        result = result + 1;
      }
    }
  }
  return result;
}

module.exports = {
  countCats
};
