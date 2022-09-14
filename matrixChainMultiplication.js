const P = [5, 4, 6, 2, 7];

function matrixChainMultiply(p) {
  const n = p.length;

  const m = [...Array(n)].map((_) => [...Array(n).fill(0)]);
  const s = [...Array(n)].map((_) => [...Array(n).fill(0)]);

  let j;
  let min;
  let q;

  for (let d = 1; d < n - 1; d++) {
    for (let i = 1; i < n - d; i++) {
      j = i + d;
      min = Number.MAX_VALUE;

      for (let k = 1; k <= j - 1; k++) {
        q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];

        if (q < min) {
          min = q;
          s[i][j] = k;
        }
      }

      m[i][j] = min;
    }
  }
  console.log(m);
  console.log(s);
  return m[1][n - 1];
}

console.log(matrixChainMultiply(P));
