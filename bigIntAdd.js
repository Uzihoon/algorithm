function add(num1, num2) {
  let biggerNum;
  let minimumNum;

  if (num1.length > num2.length) {
    biggerNum = num1;
    minimumNum = num2;
  } else {
    biggerNum = num2;
    minimumNum = num1;
  }

  let carry = 0;
  let j = minimumNum.length - 1;
  let res = [];

  for (let i = biggerNum.length - 1; i >= 0; i--) {
    const addNum = +minimumNum[j--] || 0;
    const num = +biggerNum[i];
    const added = addNum + num + carry;

    res.unshift(added % 10);
    carry = Math.floor(added / 10);
  }

  if (carry) res.unshift(carry);

  return res.join('');
}

console.log(add('999999999999999999999', '1'));
