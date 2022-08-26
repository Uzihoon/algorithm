class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  addLast(value) {
    const node = new Node(value);

    if (this.root) {
      let currentNode = this.root.next;
      while (currentNode) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    } else {
      this.root = node;
    }
  }

  removeLast() {
    let current = this.root;
    let target;

    if (current && current.next) {
      while (current && current.next && current.next.next) {
        current = current.next;
      }
      target = current.next;
      current.next = null;
    } else {
      this.root = null;
      target = current;
    }

    if (target) {
      return target.value;
    }
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  removeFirst() {
    const target = this.root;

    if (this.root?.next) {
      this.root = this.root.next;
    }

    return target?.value;
  }
}

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor(iterable = [], ListNode = DoubleNode) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.ListNode = ListNode;
    Array.from(iterable, (i) => this.addList(i));
  }

  addFirst(value) {
    const newNode = new this.ListNode(value);

    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode;
    this.size += 1;

    return newNode;
  }

  addLast(value) {
    const newNode = new this.ListNode(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  addAt(value, position = 0) {
    if (position === 0) return this.addFirst(value);
    if (position === this.size) return this.addLast(value);

    const current = this.findBy({ index: position }).node;
    if (!current) return undefined;

    const newNode = new this.ListNode(value);
    newNode.previous = current.previous;
    newNode.next = current;
    current.previous.next = newNode;
    current.previous = newNode;

    this.size += 1;

    return newNode;
  }

  getIndexByValue(value) {
    return this.findBy({ value }).index;
  }

  get(index = 0) {
    return this.findBy({ index }).node;
  }

  findBy({ value, index = Infinity } = {}) {
    for (
      let current = this.first, position = 0;
      current && position <= index;
      position += 1, current = current.next
    ) {
      if (position === index || value === current.value) {
        return { node: current, index: position };
      }
    }

    return {};
  }

  removeFirst() {
    if (!this.first) return null;
    const head = this.first;

    this.first = head.next;

    if (this.first) {
      this.first.previous = null;
    } else {
      this.last = null;
    }

    this.size -= 1;

    return head.value;
  }

  removeLast() {
    if (!this.last) return null;
    const tail = this.last;

    this.last = tail.previous;

    if (this.last) {
      this.last.next = null;
    } else {
      this.first = null;
    }

    this.size -= 1;

    return tail.value;
  }

  removeByPosition(position = 0) {
    if (position === 0) return this.removeFirst();
    if (position === this.size) return this.removeLast();

    const current = this.findBy({ index: position }).node;
    if (!current) return null;
    current.previous.next = current.next;
    current.next.previous = current.previous;
    this.size -= 1;
    return current?.value;
  }
}
