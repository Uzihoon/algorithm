const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

const binarySearch = (arr, num) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let pivot = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivot] === num) {
      return pivot;
    } else if (arr[pivot] < num) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }

  return false;
};

console.log(binarySearch(powers, 16));

function indexOf(array, element, offset = 0) {
  const half = parseInt(array.length / 2);
  const current = array[half];

  if (current === element) {
    return offset + half;
  } else if (element > current) {
    const right = array.slice(half);
    return indexOf(right, element, offset + half);
  } else {
    const left = array.slice(0, half);
    return indexOf(left, element, offset);
  }
}

const directory = ['Adrian', 'Bella', 'Charlotte'];

console.log(indexOf(directory, 'Bella'));
