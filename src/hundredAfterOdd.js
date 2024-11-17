/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  return arr.flatMap(num => (num % 2 !== 0 ? [num, 100] : [num]));
};
