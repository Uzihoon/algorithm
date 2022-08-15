function f1(funcs) {
  return (finalCB, data) => {
    let nextFuncIndex = 0;

    const callNextFunc = data => {
      if (nextFuncIndex === funcs.length) {
        finalCB(undefined, data);
        return;
      }
      const nextFunc = funcs[nextFuncIndex];
      nextFuncIndex += 1;

      let cb = (error, newData) => {
        error ? finalCB(error, undefined) : callNextFunc(newData);
      };
      nextFunc(cb, data);
    };

    callNextFunc(data);
  };
}

function parallel(funcs) {
  return (finalCB, data) => {
    const nextFuncCall = data => {
      if (funcs.length) {
        finalCB(undefined, data);
        return;
      }

      const nextFunc = funcs.shift();
      const cb = (error, newData) => {
        !error ? nextFuncCall(newData) : finalCB(error);
      };

      nextFunc(cb, data);
    };

    nextFuncCall(data);
  };
}

function sequence_withoutPromise(funcs) {
  const next = (callback, data) => {
    if (!funcs.length) return callback(undefined, data);

    funcs.shift()((err, newData) => {
      err ? callback(error, undefined) : next(callback, newData);
    }, data);
  };

  return next;
}

function promisfy(func, inputData) {
  return new Promise((resolve, reject) => {
    func((err, response) => {
      !err ? resolve(response) : reject(err);
    }, inputData);
  });
}

function sequence_withAsnyAwait(funcs) {
  return async (callback, data) => {
    let res = data;
    try {
      funcs.map(async func => {
        ret = await promisfy(func, ret);
      });
    } catch (err) {
      callback(err, res);
    }
  };
}
