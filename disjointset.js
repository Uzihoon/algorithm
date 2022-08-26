class DisjointSetNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.rank = 1;
    this.parent = -1;
  }
}

class DisjoinSet {
  constructor() {
    this.list = {};
    this.size = 0;
  }

  init(size) {
    this.size = size;
    for (let i = 0; i < this.size; i++) {
      const disjointsetNode = new DisjointSetNode(i);
      this.list[i] = disjointsetNode;
    }
  }

  findRoot(x) {
    if (this.list[x] && this.list[x].parent !== -1) {
      return this.findRoot(this.list[x].parent);
    } else {
      return this.list[x];
    }
  }

  union(x, y) {
    const xRoot = this.findRoot(x);
    const yRoot = this.findRoot(y);

    yRoot.parent = -1;
    yRoot.children[xRoot.value] = xRoot;
    xRoot.parent = yRoot.value;
  }

  isConnected(value1, value2) {
    if (this.findRoot(value1).value === this.findRoot(value2).value) {
      return true;
    }

    return false;
  }
}
