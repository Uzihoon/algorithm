class MaxHeap {
  constructor() {
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }

  swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  add(element) {
    this.values.push(element);

    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  extractMax() {
    if (this.values.length < 1) return 'heap is empty';

    const max = this.values[0];
    const end = this.values.pop();

    this.values[0] = end;
    this.heapifyDown(0);

    return max;
  }

  heapifyDown(index) {
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);

      let largestIndex = index;

      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }

      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  buildHeap(array) {
    this.values = array;

    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  peek() {
    return this.values[0];
  }

  print() {
    let i = 0;

    while (!this.isLeaf(i)) {
      console.log(`PARENT: ${this.values[i]}`);
      console.log(`LEFT CHILD ${this.values[this.leftChild(i)]}`);
      console.log(`RIGHT CHILD: ${this.values[this.rightChild(i)]}`);
      i++;
    }
  }
}

const heap = new MaxHeap();

heap.buildHeap([1, 5, 3, 10, 7, 9, 3]);

heap.print();
