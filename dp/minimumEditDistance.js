function editDistance(str1, str2) {
  const table = [...Array(str1.length + 1)].map((_) =>
    [...Array(str2.length + 1)].fill(0)
  );

  for (let i = 1; i < table.length; i++) {
    table[i][0] = i;
    for (let j = 1; j < table[0].length; j++) {
      table[0][j] = j;
      const s1 = str1[i - 1];
      const s2 = str2[j - 1];

      if (s1 === s2) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 + Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]);
      }
    }
  }
  console.log(table);
  return table[str1.length][str2.length];
}

console.log(editDistance('data', 'dent'));
