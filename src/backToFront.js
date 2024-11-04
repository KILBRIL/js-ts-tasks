/**
 * opy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length < symbolsCount) {
    return str;
  } else {
    let newstr = str.slice(str.length - symbolsCount);
    return newstr + str + newstr;
  }
};
