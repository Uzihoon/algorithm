const findLadders = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return [];
  if (beginWord === endWord) return [[beginWord]];

  wordList.push(beginWord);

  const wordToNeighbors = new Map();
  const wordToShortLen = new Map();
  const shortestLen = findShortestLen(beginWord, endWord);
  findAllNeighbors(beginWord);
  const ladders = [];

  recursion(beginWord, shortestLen, [beginWord]);
  return ladders;

  function recursion(word, shortest, slate) {
    if (shortest === 0) {
      ladders.push([...slate]);
      return;
    }

    const neighbors = wordToNeighbors.get(word);
    for (const neighbor of neighbors) {
      if (
        !wordToShortLen.has(neighbor) ||
        wordToShortLen.get(neighbor) !== shortest - 1
      ) {
        continue;
      }

      slate.push(neighbor);
      recursion(neighbor, shortest - 1, slate);
      slate.pop();
    }
  }

  function findShortestLen(beginWord, endWord) {
    const queue = [endWord];
    let count = 0;

    wordToShortLen.set(endWord, count);
    while (queue.length) {
      const size = queue.length;
      count += 1;

      for (let i = 0; i < size; i++) {
        const word = queue.shift();
        const neighbors = findAllNeighbors(word);
        for (const neighbor of neighbors) {
          if (wordToShortLen.has(neighbor)) continue;
          wordToShortLen.set(neighbor, count);
          if (neighbor === beginWord) {
            return count;
          }
          queue.push(neighbor);
        }
      }
    }
  }

  function findAllNeighbors(word) {
    const neighbors = [];
    for (const neighbor of wordList) {
      if (neighbor === word) continue;
      if (isNeighbor(word, neighbor)) {
        neighbors.push(neighbor);
      }
    }

    wordToNeighbors.set(word, neighbors);
    return neighbors;
  }

  function isNeighbor(word1, word2) {
    if (word1.length !== word2.length) return false;
    let differ = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        differ += 1;
        if (differ > 1) return false;
      }
    }

    return differ === 1;
  }
};

console.log(
  findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
);
