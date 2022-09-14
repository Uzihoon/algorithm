function minCostRecursive(cost, m, n, table) {
  if (m < 0 || n < 0) return Number.MAX_SAFE_INTEGER;
  if (m === 0 && n === 0) return cost[m][n];
  if (table[m][n] !== -1) return table[m][n];

  return (
    cost[m][n] +
    Math.min(
      minCostRecursive(m - 1, n - 1),
      minCostRecursive(m, n - 1),
      minCostRecursive(m - 1, n)
    )
  );
}

function minCostDP(cost) {
  // Start point
  const m = cost.length - 1;
  const n = cost[0].length - 1;
  const dp = [...Array(m + 1)].map((_) => [...Array(n + 1).fill(0)]);

  dp[0][0] = cost[0][0];

  for (let i = 1; i < cost.length; i++) {
    dp[i][0] = dp[i - 1][0] + cost[i][0];
  }

  for (let j = 1; j < cost[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + cost[0][j];
  }

  for (let i = 1; i < cost.length; i++) {
    for (let j = 1; j < cost[i].length; j++) {
      dp[i][j] =
        cost[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m][n];
}

const cost = [
  [1, 2, 3],
  [4, 8, 2],
  [1, 5, 3],
];

console.log(minCostDP(cost, 2, 2));

[
  [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
];
