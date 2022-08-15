function get(object, path) {
  if (!path) return undefined;
  let key;
  console.log(path.replaceAll);
  key = path.replaceAll('[', '.');
  // path = path.replaceAll(']', '');
  path = path.split('.');
  return (
    path.reduce((dive, key) => dive && dive[key], object || {}) || undefined
  );
}

console.log(get({ developer: 'Software Engineer' }, 'developer')); // => 'Software Engineer'
console.log(
  get(
    { developer: { firstName: 'Tom', lastName: 'Cruz' } },
    'developer.lastName'
  )
); //=>'Cruz
get([{ developer: 'Tom' }, { count: [0, 1] }], '[1].count[0]'); //=>0
console.log(get([{ developer: 'Tom' }, [0, null]], '[1][1]')); //=>null
