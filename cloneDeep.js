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

function cloneDeep(data, map = new Map()) {
  if (data === null || typeof data !== 'object') {
    return data;
  }

  if (map.has(data)) {
    return map.get(data);
  }

  const output = Array.isArray(data) ? [] : {};

  map.set(data, output);

  const keys = [...Object.getOwnPropertySymbols(data), ...Object.keys(data)];

  for (const key of keys) {
    const val = data[key];
    output[key] = cloneDeep(val, map);
  }

  return output;
}

const b = { a: 5, c: { d: { e: 10 }, f: [1, 2, 3] } };
const e = cloneDeep(b);

e.c.d.e = 5;

console.log(b, e);
