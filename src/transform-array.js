const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(abc) {
  let result = [];
  if (Array.isArray(abc)) {
    const dsrcnext = '--discard-next'
    const dsrcprev = '--discard-prev'
    const dblnext = '--double-next'
    const dblprev = '--double-prev'
    for (i = 0; i < abc.length; i++) {
      if (abc[i] === dblnext) {
        result.push(abc[i + 1]);
        continue;
      }
      if (abc[i + 1] === dsrcprev || abc[i] === dsrcprev) {
        continue;
      }
      if (abc[i] === dsrcnext) {
        i += 2;
      }
      if (abc[i + 1] === dblprev) {
        result.push(abc[i]);
        result.push(abc[i]);
        i += 2;
        continue;
      }
      result.push(abc[i]);
    }
    console.log(result);
  }
  else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  return result;
}

module.exports = {
  transform
};
