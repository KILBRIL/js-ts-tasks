/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function check(start, end) {
    let newsarr = [];
    let cch = true;
    for (let i = start; i <= end; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0 && i !== j) {
          cch = false;
        }
      }
      if (cch === true) {
        newsarr.push(i);
      }
      cch = true;
    }
    return newsarr;
  }
  return check;
};
