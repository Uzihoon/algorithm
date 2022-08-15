function detectType(data) {
  // your code here
  if (data instanceof FileReader) return 'object';
  return Object.prototype.toString
    .call(data)
    .slice(1, -1)
    .split(' ')[1]
    .toLowerCase();
}
