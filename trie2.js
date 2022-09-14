class TrieNode {
  constructor() {
    this.children = {};
    this.endWord = false;
    this.wordStr = '';
    this.topThree = [];
  }

  hasChild(letter) {
    return !!this.children[letter];
  }

  createChild(letter) {
    this.children[letter] = new TrieNode();
  }

  getChild(letter) {
    return this.children[letter];
  }

  getTopThree() {
    return this.topThree;
  }

  updateWordStr(word) {
    this.wordStr = word;
  }

  setIsEndWord() {
    this.endWord = true;
  }

  updateTopThree(word) {
    if (this.topThree.length < 3) {
      this.topThree.push(word);
      this.bblSort();
    } else if (word < this.topThree[this.topThree.length - 1]) {
      this.topThree[this.topThree.length - 1] = word;
      this.bblSort();
    }
  }

  bblSort() {
    for (let i = 0; i < this.topThree.length; i++) {
      for (let j = 0; j < this.topThree.length - i - 1; j++) {
        if (this.topThree[j] > this.topThree[j + 1]) {
          [this.topThree[j], this.topThree[j + 1]] = [
            this.topThree[j + 1],
            this.topThree[j],
          ];
        }
      }
    }
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;

    for (const letter of word) {
      if (!cur.hasChild(letter)) {
        cur.createChild(letter);
      }
      cur = cur.getChild(letter);
      cur.updateTopThree(word);
    }

    cur.setIsEndWord();
    cur.updateWordStr(word);
  }

  search(word) {
    let cur = this.root;
    let results = [];
    let end = false;

    for (const letter of word) {
      if (!end && cur.hasChild(letter)) {
        cur = cur.getChild(letter);
        results.push(cur.getTopThree());
      } else {
        end = true;
        results.push([]);
      }
    }

    return results;
  }
}

const suggestedProducts = function (products, searchWord) {
  const trie = new Trie();

  products.forEach((product) => trie.insert(product));

  return trie.search(searchWord);
};

console.log(
  suggestedProducts(
    ['code', 'codephone', 'coddle', 'coddles', 'codes'],
    'coddle'
  )
);
