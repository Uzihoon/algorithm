class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    let min =
      this.stack.length === 0 ? val : this.stack[this.stack.length - 1].min;

    this.stack.push({ val: val, min: Math.min(min, val) });
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
    }
  }

  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1].val;
    }
  }

  getMin() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1].min;
    }
  }
}
