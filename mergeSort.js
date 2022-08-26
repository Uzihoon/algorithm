//  O(n log n);
const nums = [128, 0, 64, 16, 4, 8, 2];

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr.length / 2;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(nums));
