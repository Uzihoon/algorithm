// DFS
function getHeight(tree) {
  let maxHeight = 0;

  if (!tree) {
    return maxHeight;
  }

  for (let child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(child));
  }

  return maxHeight + 1;
}

//BFS
function getHeight(tree) {
  let maxHeight = 0;

  if (!tree) return maxHeight;

  let queue = [[tree, 1]];

  while (queue.length) {
    const [node, height] = queue.shift();
    maxHeight = Math.max(maxHeight, height);

    for (let child of node.children) {
      queue.push([child, height + 1]);
    }
  }

  return height;
}
