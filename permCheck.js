function solution(A) {
  A.sort();

  let sum = 0;
  let anwer = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== sum + 1) {
      anwer = 0;
      break;
    } else {
      ++sum;
    }
  }

  return anwer;
}

console.log(solution([4, 1, 3, 2]));
