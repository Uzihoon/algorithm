function nToKGroups(n, k) {
  if (n < k) return 0;

  const dp = [...Array(k + 1)].map((_) => [...Array(n + 1)].fill(0));

  for (let i = 1; i <= k; i++) {
    for (let j = i; j <= n; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      }
    }
  }
  console.log(dp);
  return dp[k][n];
}

console.log(nToKGroups(8, 3));
