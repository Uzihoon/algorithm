const arr = ['c', 'ca', 'can', 'acan', 'acane', 'dacane'];

const isProgressive = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    const nextLength = arr[i + 1].length;
    if (
      arr[i + 1] === arr[i + 1][0] + arr[i] ||
      arr[i + 1] === arr[i] + arr[i + 1][nextLength - 1]
    ) {
      continue;
    }

    return false;
  }

  return true;
};
