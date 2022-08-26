function sort(n) {
  for (let outer = 0; outer < n.length; outer++) {
    let outerElement = n[outer];

    for (let inner = outer + 1; inner < n.length; inner++) {
      let innerElement = n[inner];

      if (outerElement > innerElement) {
        n[outer] = innerElement;
        n[inner] = outerElement;

        outerElement = n[outer];
        innerElement = n[inner];
      }
    }
  }

  return n;
}

console.log(sort([1, 5, 2, 11, 9, 7]));
