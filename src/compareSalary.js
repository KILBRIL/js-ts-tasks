/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  if (firstSalary > secondSalary && firstSalary > thirdSalary && secondSalary > thirdSalary) {
    return firstSalary - thirdSalary;
  }
  if (firstSalary > secondSalary && firstSalary > thirdSalary && thirdSalary > secondSalary) {
    return firstSalary - secondSalary;
  }
  if (secondSalary > firstSalary && secondSalary > thirdSalary && firstSalary > thirdSalary) {
    return secondSalary - thirdSalary;
  }
  if (secondSalary > thirdSalary && secondSalary > firstSalary && thirdSalary > firstSalary) {
    return secondSalary - firstSalary;
  }
  if (thirdSalary > firstSalary && thirdSalary > secondSalary && firstSalary > secondSalary) {
    return thirdSalary - secondSalary;
  }
  if (thirdSalary > firstSalary && thirdSalary > secondSalary && secondSalary > firstSalary) {
    return thirdSalary - firstSalary;
  }
  if (firstSalary === secondSalary && firstSalary === thirdSalary) {
    return 0;
  }
};
