function findKThLargest(arr, k, l = 0, r = arr.length - 1) {
  const pivot = partition(arr, l, r);

  if (pivot === arr.length - k) return arr[pivot];
  if (pivot < arr.length - k) {
    return findKThLargest(arr, k, pivot + 1, r);
  } else {
    return findKThLargest(arr, k, l, pivot - 1);
  }
}

function partition(arr, l, r) {
  let pivot = l;

  for (let i = l; i < r; i++) {
    if (arr[i] < arr[r]) {
      swap(i, pivot++, arr);
    }
  }

  swap(pivot, r, arr);

  return pivot;
}

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(findKThLargest([5, 4, 5, 1, 2, 3, 4, 6], 5));
