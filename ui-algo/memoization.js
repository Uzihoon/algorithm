function memo(func, resolver) {
  const cache = new Map();

  return function memoized(...args) {
    const key = resolver ? resolver(...args) : args.toString();

    if (cache.has(key)) return cache.get(key);

    const val = func.apply(this, args);
    cache.set(key, val);

    return val;
  };
}

const func = (arg1, arg2) => {
  console.log('called: ', arg1 + arg2);
  return arg1 + arg2;
};

const memoed = memo(func);

memoed(1, 2);
memoed(1, 2);
memoed(1, 3);
