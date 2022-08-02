const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

// O(log n)
const binarySearch = (arr, num) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let pivot = Math.floor((startIndex + endIndex) / 2);
    console.log(
      `pivot: ${pivot}, startIndex: ${startIndex}, endIndex: ${endIndex}, value: ${arr[pivot]}`
    );

    if (arr[pivot] === num) {
      return `Found`;
    } else if (arr[pivot] < num) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }

  return false;
};

binarySearch(powers, 778);

// O(n log n)
const nums = [128, 0, 64, 16, 4, 8, 2];

const merge = (left, right) => {
  console.log(left, right);
  let result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.length / 2;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

// console.log(mergeSort(nums));

const fibonaive = n => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonaive(n - 1) + fibonaive(n - 2);
};

console.log(fibonaive(5));

const fibDown = (n, memo = []) => {
  if (n == 0 || n == 1) {
    return n;
  }
  if (memo[n] == undefined) {
    memo[n] = fibDown(n - 1, memo) + fibDown(n - 2, memo);
  }
  return memo[n];
};

console.log(fibDown(5));

const fibottomup = n => {
  console.log(n);
  if (n === 0) {
    return 0;
  }

  let x = 0;
  let y = 1;
  for (let i = 2; i < n; i++) {
    let temp = x + y;
    x = y;
    y = temp;
  }

  return x + y;
};

console.log(fibottomup(5));
