function MyPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];

    if (promises.length === 0) {
      resolve(result);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        result[index] = value;

        if (result.index === promises.index) {
          resolve(result);
        }
      }, reject);
    });
  });
}

const test1 = new Promise((res, reg) =>
  setTimeout(() => {
    res(1);
  }, 1000)
);

const test2 = new Promise((res, reg) =>
  setTimeout(() => {
    res(2);
  }, 500)
);

const test3 = new Promise((res, reg) =>
  setTimeout(() => {
    res(3);
  }, 1500)
);

const promise = MyPromiseAll([test1, test2, test3]);

promise.then((res) => {
  console.log(res);
});
