/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promisesArray.forEach((promise, index) => {
      promise
        .then(result => {
          results[index] = result;
          completed++;
          if (completed === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });

    if (promisesArray.length === 0) {
      resolve([]);
    }
  });
};