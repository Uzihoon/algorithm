function race(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then((value) => {
        resolve(value);
      }, reject);
    });
  });
}
