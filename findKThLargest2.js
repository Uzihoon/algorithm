const findKthLargest = (nums, k) => {
  k = nums.length - k;

  const quickSelect = (left, right) => {
    const pivot = nums[right];
    let p = left;

    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p++;
      }
    }
    [nums[right], nums[p]] = [nums[p], nums[right]];

    if (p > k) {
      return quickSelect(left, p - 1);
    } else if (p < k) {
      return quickSelect(p + 1, right);
    } else {
      return nums[p];
    }
  };

  return quickSelect(0, nums.length - 1);
};

console.log(findKthLargest([5, 4, 5, 1, 2, 3, 4, 6], 5));
