function findPartition(arr) {
  const n = arr.length;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  if (sum % 2 !== 0) return false;

  const part = Array(parseInt(sum / 2) + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    part[0][i] = true;
  }

  for (let i = 1; i <= parseInt(sum / 2); i++) {
    part[i][0] = false;
  }

  for (let i = 1; i <= parseInt(sum / 2); i++) {
    for (let j = 1; j <= n; j++) {
      part[i][j] = part[i][j - 1];
      if (i >= arr[j - 1]) {
        part[i][j] = part[i][j] || part[i - arr[j - 1]][j - 1];
      }
    }
  }

  return part[parseInt(sum / 2)][n];
}

const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(findPartition(nums, nums.length));
