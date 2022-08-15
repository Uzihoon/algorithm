function maxSum(arr, n, k) {
  let max_sum = Number.MIN_VALUE;

  for (let i = 0; i < n - k + 1; i++) {
    let current_sum = 0;
    for (let j = 0; j < k; j++) {
      current_sum = current_sum + arr[i + j];
    }
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
}

function inhancedMaxSum(arr, n, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  console.log(sum);

  for (let i = k; i < n; i++) {
    console.log(arr[i], arr[i - k]);
    sum += arr[i] - arr[i - k];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 2;
const n = arr.length;

// console.log(maxSum(arr, n, k));
console.log(inhancedMaxSum(arr, n, k));
