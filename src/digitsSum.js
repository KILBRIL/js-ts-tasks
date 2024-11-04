/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const numstr = Math.abs(n).toString();
  let sum = 0;
  for (i = 0; i < numstr.length; i++) {
    sum += parseInt(numstr[i]);
  }
  return sum;
};