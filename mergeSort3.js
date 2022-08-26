function sort(array = []) {
  const size = array.length;

  if (size < 2) {
    return array;
  }

  if (size === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
  }

  const mid = parseInt(size / 2, 10);
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}

function merge(array1 = [], array2 = []) {
  const merged = [];
  let array1Index = 0;
  let array2Index = 0;

  while (array1Index < array1.length || array2Index < array2.length) {
    if (
      array1Index >= array1.length ||
      array1[array1Index] > array2[array2Index]
    ) {
      merged.push(array2[array2Index]);
      array2Index += 1;
    } else {
      merged.push(array1[array1Index]);
      array1Index += 1;
    }

    return merged;
  }
}
