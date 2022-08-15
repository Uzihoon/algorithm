const fibWithTab = n => {
  if (n === 1 || n === 2) return 1;

  let fibNums = [0, 1, 1];

  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  console.log(fibNums);

  return fibNums[n];
};

console.log(fibWithTab(5));
