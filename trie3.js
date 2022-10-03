class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.word = [];
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode(null);
  }

  addWord(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const w = word[i];

      if (i === word.length - 1 && node.children[w] && node.children.end)
        continue;
      if (!node.children[w]) {
        node.children[w] = new TrieNode(w);
      }

      node = node.children[w];
      if (i === word.length - 1) {
        node.word.push(word);
        node.end = true;
      }
    }
  }

  search(word) {
    let node = this.root;

    let result = this.dfs(node, word, 0);

    return result;
  }

  dfs(node, word, index) {
    if (!node) {
      return false;
    }

    if (index === word.length) {
      if (word.includes('.')) {
        return node.end;
      } else {
        console.log(node);
        return node.word.includes(word);
      }
    }

    let result = false;

    if (word[index] === '.') {
      for (const child in node.children) {
        if (this.dfs(node.children[child], word, index + 1)) {
          result = true;
          break;
        }
      }
    } else {
      node = node.children[word[index]];
      if (this.dfs(node, word, index + 1)) {
        result = true;
      }
    }

    return result;
  }
}
const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
wordDictionary.addWord('a');
// console.log(wordDictionary.search('pad')); // return False
console.log(wordDictionary.search('.')); // return False
// console.log(wordDictionary.search('.ad')); // return False
// console.log(wordDictionary.search('d..')); // return False

// wordDictionary.search('bad'); // return True
// wordDictionary.search('.ad'); // return True
// wordDictionary.search('b..'); // return True
