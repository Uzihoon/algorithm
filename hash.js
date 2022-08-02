class HashTable {
  constructor() {
    this.table = {};
  }

  modulearHash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    let hash = sum % 71;

    return hash;
  }

  put(key, value) {
    let hash = this.modulearHash(key);

    if (this.table[hash] === undefined) {
      this.table[hash] = [];
    }
    return this.table[hash].push([key, value]);
  }

  get(key) {
    let hash = this.modulearHash(key);

    for (let i = 0; i < this.table[hash].length; i++) {
      if (this.table[hash][i][0] === key) {
        return this.table[hash][i][1];
      }
    }

    return undefined;
  }

  remove(key) {
    return delete this.table[this.modulearHash(key)];
  }
}

const hashTable = new HashTable();

hashTable.put('JIWOO', '@jiwooHong');
hashTable.put('TOM', '@tomCruise');

console.log(hashTable.get('TOM'));
