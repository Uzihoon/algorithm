function update(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case '$put':
        return [...data, ...value];
      case '$set':
        return value;
      case '$merge':
        if (!(data instanceof Object)) {
          throw new Error('This is not an object type.');
        }
        return { ...data, ...value };
      case '$apply':
        return value(data);
      default:
        if (Array.isArray(data)) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value),
          };
        }
    }
  }
}

const state = {
  a: {
    b: {
      c: 1,
    },
  },
  d: 2,
};

const newState = update(state, { a: { b: { $set: { d: 10 } } } });

console.log(state, newState);
