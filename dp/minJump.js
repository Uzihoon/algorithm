function minJump(arr) {
  const count = [...Array(arr.length)].fill(Number.MAX_SAFE_INTEGER);
  const idx = [];

  count[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      if (arr[j] + j < i) continue;

      if (count[i] > count[j] + 1) {
        count[i] = count[j] + 1;
        idx[i] = j;
      }
    }
  }

  let i = idx[idx.length - 1];
  let track = [arr[arr.length - 1]];

  while (i > 0) {
    track.unshift(arr[i]);
    i = idx[i];
  }

  track.unshift(arr[0]);

  return { track, min: count[count.length - 1] };
}

const jump = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

console.log(minJump(jump));
