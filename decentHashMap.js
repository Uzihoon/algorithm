class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  hash(key) {
    let hashValue = 0;
    const stringKey = `${key}${typeof key}`;

    for (let index = 0; index < stringKey.length; index++) {
      const charCode = stringKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }

  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  set(key, value) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      const keyIndex = this.keys.push({ content: key }) - 1;
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, value, keyIndex });
      this.size++;

      if (this.buckets[bucketIndex].length > 1) this.collisions++;
    } else {
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  get(key) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if (entry.key === key) {
        return { bucketIndex, entryIndex };
      }
    }

    return { bucketIndex };
  }

  delete(key) {
    const { bucketIndex, entryIndex, keyIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.key[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach((key) => {
      if (key) {
        newMap.set(key.content, this.get(key.content));
      }

      this.buckets = newMap.buckets;
      this.collisions = newMap.collisions;
      this.keys = newMap.keys;
    });
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}

export default HashMap;
