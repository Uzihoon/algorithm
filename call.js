Function.prototype.call = function (thisArg, ...args) {
  thisArg = Object(thisArg || window);
  let func = Symbol();
  thisArg[func] = this;
  let res = thisArg[func](...args);
  delete thisArg[func];

  return res;
};
