// Recursive
const test1 = (rootA, rootB, target) => {
  if (rootA === target) {
    return rootB;
  }

  for (let i = 0; i < rootA.children.length; i++) {
    const res = test1(rootA.children[i], rootB.children[i], target);
    if (res) {
      return res;
    }
  }
};

// DFS: Using stack
const test2 = (rootA, rootB, target) => {
  const stack = [[rootA, rootB]];

  while (stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;

    for (let i = 0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]]);
    }
  }
};

// BFS: Using queue
const test3 = (rootA, rootB, target) => {
  if (rootA === target) {
    return rootB;
  }

  const queueA = [rootA];
  const queueB = [rootB];

  while (queueA.length) {
    const currElementA = queueA.shift();
    const currElementB = queueB.shift();

    if (currElementA === target) {
      return currElementB;
    }

    queueA.push(...currElementA.children);
    queueB.push(...currElementB.children);
  }
};

// Using DOM API
const test4 = (rootA, rootB, targt) => {};
