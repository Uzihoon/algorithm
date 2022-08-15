const fibonaive = n => {
  if (n <= 1) return n;
  return fibonaive(n - 1) + fibonaive(n - 2);
};

const fibDown = (n, memo = []) => {
  if (n <= 1) return n;

  if (memo[n] === undefined) {
    memo[n] = fibDown(n - 1, memo) + fibDown(n - 2, memo);
  }

  return memo[n];
};

console.log(fibDown(5));
