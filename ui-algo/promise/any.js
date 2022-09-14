/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    const errorList = [];
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          errorList[index] = err;
          if (errorList.length === promises.length) {
            reject(new AggregateError('No Promise', errorList));
          }
        });
    });
  });
}
