const result = [];

function permute(arr) {
  const dict = new Map();

  for (let str of arr) {
    const c = dict.get(str) || 0;
    dict.set(str, c + 1);
  }

  const str = [...dict.keys()];
  const count = [...dict.values()];
  const temp = [...Array(arr.length)].fill(0);
  let start = 0;

  permutation(str, count, temp, start);
}

function permutation(str, count, temp, start) {
  if (start === temp.length) {
    result.push([...temp]);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[i] === 0) continue;
    temp[start] = str[i];
    count[i] -= 1;
    permutation(str, count, temp, start + 1);
    count[i] += 1;
  }
}

permute(['A', 'A', 'B', 'C']);

console.log(result);
