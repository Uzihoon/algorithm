function solution(S) {
  const transform = { A: "B", B: "A", C: "D", D: "C" };
  const stack = [];
  const str = S.split("");

  stack[0] = str[0];
  for (let i = (s = 1); str[i]; i++) {
    if (transform[str[i]] === stack[s - 1]) {
      stack[--s] = 0;
    } else {
      stack[s++] = str[i];
    }
    console.log(stack);
  }
  return stack.filter(s => s).join("");
}

console.log(solution("CCACDBABDDCAB"));
