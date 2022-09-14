const hexToRgba = (hex) => {
  const validChars = /^#[a-fA-F\d]+$/.test(hex);
  const validLength = [4, 5, 7, 9].includes(hex.length);

  if (!validLength || !validChars) {
    throw new Error('Invalid HEX');
  }

  const [r, g, b, a = 255] = hex
    .toLowerCase()
    .split('')
    .slice(1)
    .reduce(
      (acc, curr) => `${acc}${hex.length < 7 ? curr.repeat(2) : curr}`,
      ''
    )
    .match(/(..)/g)
    .map((hex) => parseInt(hex, 16));

  return `rgba(${r},${g},${b},${Math.round((a / 255) * 100) / 100})`;
};
