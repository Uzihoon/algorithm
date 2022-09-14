function stairCase(n) {
  step = [...Array(n + 1)].fill(0);

  if (n === 1 || n === 2) return n;

  step[1] = 1;
  step[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    step[1] = step[i - 1] + step[i - 2];
  }
  console.log(step);
  return step[n];
}

console.log(stairCase(7));
