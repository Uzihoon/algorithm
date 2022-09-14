function subsetSum(arr, sum, temp = [], res = [], i = 0) {
  if (sum === 0) {
    res.push([...temp]);
    return;
  }

  if (i > arr.length && sum !== 0) return;
  if (sum < 0) return;

  const val = arr[i];
  subsetSum(arr, sum - val, temp.concat([val]), res, i + 1);
  subsetSum(arr, sum, temp, res, i + 1);

  return res;
}

const arr = [3, 4, 5, 2];
const sum = 9;

console.log(subsetSum(arr, sum));
