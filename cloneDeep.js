function clone(obj) {
  if (!obj) return obj;

  let cloned = Array.isArray(obj) ? [] : {};

  let value;

  for (const key in obj) {
    value = obj[key];
    cloned[key] = typeof value === 'object' ? clone(value) : value;
  }

  return cloned;
}

const a = { a: 1, b: { c: 1 } };
const c = clone(a);
