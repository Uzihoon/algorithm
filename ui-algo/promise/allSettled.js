function allSettled(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    if (promises.length === 0) {
      resolve(result);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          result[index] = { status: 'fulfilled', value };
          if (result.length === promises.length) {
            resolve(result);
          }
        },
        (error) => {
          result[index] = { status: 'rejected', reason: error };
          if (result.length === promises.length) {
            resolve(result);
          }
        }
      );
    });
  });
}
