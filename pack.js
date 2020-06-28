let n;
let capacity;
const volumn = Array(100);
const need = Array(100);
const name = Array(100);
const cache = Array.from(Array(1001), () => new Array(100));

function pack(capacity, item) {
  if (item === n) return 0;
  let ret = cache[capacity][item];
  if (ret) return ret;

  ret = pack(capacity, item + 1);

  if (capacity >= volumn[item]) {
    ret = Math.max(ret, pack(capacity - volumn[item], item + 1) + need[item]);
  }

  return ret;
}
