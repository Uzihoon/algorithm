function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = Array(N).fill(0);
  let max = 0;

  for (i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      counters = Array(N).fill(max);
    } else {
      const index = A[i] - 1;
      counters[index]++;
      if (counters[index] > max) max = counters[index];
    }
  }

  return counters;
}
