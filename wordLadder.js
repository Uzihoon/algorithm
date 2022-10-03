const findLadders = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return [];
  if (beginWord === endWord) return [[beginWord]];

  wordList.push(beginWord);

  const wordToNeighbors = new Map();
  const wordToShortest = new Map();
  const shortestLen = findShortestLen(beginWord, endWord);
  const ladders = [];

  recursion(beginWord, shortestLen, [beginWord]);

  return ladders;

  function recursion(currWord, currShortest, currLadder) {
    if (currShortest === 0) {
      ladders.push([...currLadder]);
      return;
    }

    const neighbors = findAllNeighbors(currWord);

    for (let neighbor of neighbors) {
      if (
        !wordToShortest.has(neighbor) ||
        wordToShortest.get(neighbor) !== currShortest - 1
      ) {
        continue;
      }

      currLadder.push(neighbor);
      recursion(neighbor, currShortest - 1, currLadder);
      currLadder.pop();
    }
  }

  function findShortestLen(beginWord, endWord) {
    const queue = [];
    queue.push(beginWord);
    let count = 0;

    wordToShortest.set(endWord, count);

    while (queue.length) {
      count++;
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const currLast = queue.shift();
        const neighbors = findAllNeighbors(currLast);
        for (let neighbor of neighbors) {
          if (wordToShortest.has(neighbor)) continue;
          wordToShortest.set(neighbor, count);
          if (neighbor === beginWord) {
            return count;
          }
          queue.push(neighbor);
        }
      }
    }

    return -1;
  }

  function findAllNeighbors(word) {
    if (wordToNeighbors.has(word)) return wordToNeighbors.get(word);

    const neighbors = [];

    for (let w of wordList) {
      if (isNeighbor(word, w)) {
        neighbors.push(w);
      }
    }

    wordToNeighbors.set(word, neighbors);
    return neighbors;
  }

  function isNeighbor(w1, w2) {
    if (w1.length !== w2.length) return false;
    let diff = 0;

    for (let i = 0; i < w1.length; i++) {
      if (w1.charAt(i) !== w2.charAt(i)) {
        diff++;
        if (diff > 1) return false;
      }
    }

    return diff === 1;
  }
};
