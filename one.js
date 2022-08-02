const dp = [];

function topDown(n) {
  if (n === 1) return 0;
  if (dp[n]) return dp[n];

  let result = topDown(n - 1) + 1;
  console.log(result, n);
  if (n % 3 === 0) result = Math.min(result, topDown(n / 3) + 1);
  if (n % 2 === 0) result = Math.min(result, topDown(n / 2) + 1);

  dp[n] = result;

  return result;
}

console.log(topDown(10));
