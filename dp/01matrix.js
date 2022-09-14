const updateMatrix = (matrix) => {
  const queue = [];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const updatedMatrix = [...Array(matrix.length)].map((_) =>
    [...Array(matrix[0].length)].fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
        updatedMatrix[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    let [i, j] = queue.shift();
    let currentValue = updatedMatrix[i][j];

    for (let dir of dirs) {
      if (
        i + dir[0] < 0 ||
        i + dir[0] >= matrix.length ||
        i + dir[1] < 0 ||
        i + dir[1] >= matrix[0].length
      ) {
        continue;
      } else if (updatedMatrix[i + dir[0]][j + dir[1]] > currentValue + 1) {
        updatedMatrix[i + dir[0]][j + dir[1]] = currentValue + 1;
        queue.push([i, dir[0], j + dir[1]]);
      }
    }
  }

  console.log(updatedMatrix);
  return updatedMatrix;
};

const matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
updateMatrix(matrix);
