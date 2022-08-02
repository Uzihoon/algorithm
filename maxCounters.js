function solutionB(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxAll = 0;
  let max = 0;

  const counters = [];

  for (let i = 0; i < A.length; i++) {
    const val = A[i];
    if (val > N) {
      maxAll = max;
    } else {
      counters[val - 1] = Math.max(counters[val - 1] || 0, maxAll) + 1;
      if (counters[val - 1] > max) max = counters[val - 1];
    }
  }

  for (let i = 0; i < N; i++) {
    if (!counters[i] || counters[i] < maxAll) counters[i] = maxAll;
  }
  return counters;
}

console.log(solutionB(5, [3, 4, 4, 6, 1, 4, 4]));
