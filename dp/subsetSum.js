function isSubset(set, sum) {
  const res = [...Array(set.length + 1)].map((_) =>
    [...Array(sum + 1)].fill(false)
  );

  for (let i = 0; i < set.length + 1; i++) {
    res[i][0] = true;
  }

  for (let i = 1; i < set.length + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (j < set[i - 1]) {
        res[i][j] = res[i - 1][j];
      } else {
        res[i][j] = res[i - 1][j] || res[i - 1][j - set[i - 1]];
      }
    }
  }

  return res[set.length][sum];
}

const set = [2, 3, 4, 5];
const sum = 5;

console.log(isSubset(set, sum));
