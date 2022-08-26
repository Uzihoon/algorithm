const items = [5, 3, 7, 6, 2, 9];

function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)];
  let l = left;
  let h = right;

  while (l <= h) {
    while (items[l] < pivot) {
      l++;
    }

    while (items[h] > pivot) {
      h--;
    }

    if (l <= h) {
      swap(items, l, h);
      l++;
      h--;
    }
  }

  return l;
}

function quickSort(items, left = 0, right = items.length - 1) {
  if (items.length > 1) {
    const index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

console.log(quickSort(items));
