/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  var sum = 0;
  if (start < end) {
    while (start <= end) {
      sum += Number(start);
      start++;
    }
  } else {
    while (start > end) {
      sum += Number(start);
      start--;
    }
  }
  return sum;
};
