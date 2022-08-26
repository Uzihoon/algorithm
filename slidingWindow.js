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
function inhancedMaxSum(arr, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let arr = [1, 3, 5, 6, 2, 7, 8];
const k = 3;
const n = arr.length;

// console.log(maxSum(arr, n, k));
console.log(inhancedMaxSum(arr, k));

function slidingWindow2() {
  let arr = [1, 3, 5, 6, 2, 7, 8];
  let maxSum = 0;
  let sumOfWindow = 0;
  let windowSize = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (windowSize === 3) {
      maxSum = Math.max(maxSum, sumOfWindow);
      sumOfWindow = sumOfWindow - arr[i - 3];
      windowSize--;
    }

    sumOfWindow = sumOfWindow + arr[i];
    windowSize++;
  }

  console.log('The maximum sum is: ' + maxSum);
}

slidingWindow2();
