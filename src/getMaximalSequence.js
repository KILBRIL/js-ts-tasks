/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */

module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxarr = [];
  let newarr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      newarr.push(arr[i]);
    } else {
      if (newarr.length > maxarr.length) {
        maxarr = newarr;
      }
      newarr = [arr[i]];
    }
  }
  if (newarr.length > maxarr.length) {
    maxarr = newarr;
  }
  return maxarr;
};
