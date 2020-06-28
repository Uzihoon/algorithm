function solution(A) {
  let right = A.reduce((a, b, i) => (i > 0 ? a + b : 0), 0);
  let left = 0;
  let substractions = [];
  let maxI = A.length - 1;

  for (let i = 0; i < maxI; i++) {
    console.log(A[i]);
    left += A[i];
    substractions.push(Math.abs(left - right));
    if (i + 1 <= maxI) right -= A[i + 1];
  }
  return substractions.reduce((a, b, i) => (i > 0 ? (a < b ? a : b) : b), 0);
}

console.log(solution([3, 1, 2, 4, 3]));
