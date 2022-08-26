function powerset(n = '') {
  const array = Array.from(n);
  const base = [''];

  const result = array.reduce((previous, element) => {
    const previousPlusElement = previous.map((el) => {
      return `${el}${element}`;
    });

    return previous.concat(previousPlusElement);
  }, base);

  return result;
}
