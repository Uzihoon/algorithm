const wordbreak = (word, dict) => {
  const table = [...Array(word.length)].map((_) =>
    [...Array(word.length)].fill(false)
  );

  for (let l = 1; l < word.length + 1; l++) {
    for (i = 0; i < word.length - l + 1; i++) {
      const j = i + l - 1;
      const str = word.slice(i, j + 1);
      if (dict.includes(str)) {
        table[i][j] = true;
        continue;
      }

      for (let k = i + 1; k < j + 1; k++) {
        if (table[i][k - 1] !== false && table[k][j] !== false) {
          table[i][j] = true;
          break;
        }
      }
    }
  }
  return table[0][word.length - 1];
};

console.log(wordbreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
