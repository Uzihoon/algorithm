function solution(A) {
  A.sort();
  let min = A[0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > -1 && A[i] === min) {
      min = min + 1;
    }
  }
  console.log(A);
  return min;
}

console.log(solution([101, 103, 105, 102, 106, 107, 108, 109, 111, 110]));
