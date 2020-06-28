const MOD = 1000000007;
const cache = Array(101);

function tiling(width) {
  if (width <= 1) return 1;
  let ret = cache[width];
  if (ret !== -1) return ret;
  return (ret = (tiling(width - 2) + tiling(width - 1)) % MOD);
}
