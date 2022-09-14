function isEqual(a, b, map = new Map()) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (map.has(a) && map.get(a) === b) return true;
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  map.set(a, b);

  const type = typeof a;

  if (type === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    for (let i = 0; i < aKeys.length; i++) {
      if (aKeys[i] !== bKeys[i]) return false;
      if (!isEqual(a[aKeys[i]], b[bKeys[i]], map)) return false;
    }

    return true;
  }

  return false;
}

console.log(isEqual([1, 2, 3], [1, 2, 4]));
