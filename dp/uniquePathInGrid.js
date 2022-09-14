function uniquePath(arr) {
  const path = [...Array(arr.length)].map((_) =>
    [...Array(arr[0].length)].fill(0)
  );

  if (arr[0][0] === 0) {
    path[0][0] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] === 0) path[i][0] = path[i - 1][0];
  }

  for (let j = 1; j < arr[0].length; j++) {
    if (arr[0][j] === 0) path[0][j] = path[0][j - 1];
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        path[i][j] = path[i - 1][j] + path[i][j - 1];
      }
    }
  }

  return path[path.length - 1][path.length - 1];
}

const arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.log(uniquePath(arr));
