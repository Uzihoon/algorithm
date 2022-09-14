function lcs(x, y) {
  const dp = [...Array(x.length + 1)].map((_) =>
    [...Array(y.length + 1)].fill(0)
  );
  const xString = [0, ...x.split('')];
  const yString = [0, ...Y.split('')];

  for (let i = 1; i < xString.length; i++) {
    for (let j = 1; j < yString.length; j++) {
      if (xString[i] === yString[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[x.length][y.length];
}

const X = 'abcdef';
const Y = 'pqrbrceuf';

console.log(lcs(X, Y));
