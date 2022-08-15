const trap = height => {
  if (height.length < 3) return 0;

  const maxHeightLeft = height.slice();
  const maxHeightRight = height.slice();

  for (let i = 1; i < height.length; i++) {
    if (maxHeightLeft[i] < maxHeightLeft[i - 1]) {
      maxHeightLeft[i] = maxHeightLeft[i - 1];
    }
  }

  for (let i = height.length - 2; i >= 0; i--) {
    if (maxHeightRight[i] < maxHeightRight[i + 1]) {
      maxHeightRight[i] = maxHeightRight[i + 1];
    }
  }

  return height.reduce(
    (acc, cur, idx) =>
      acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
    0
  );
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
