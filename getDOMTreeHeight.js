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

// BFS
function getHeight(tree) {
  let height = 0;
  if (!tree) return height;

  let q = [[tree, 1]];

  while (q.length) {
    const [node, h] = q.shift();
    height = Math.max(h, height);
    for (let child of node.children) {
      q.push([child, h + 1]);
    }
  }

  return height;
}
