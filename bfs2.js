const bfs = (graph, start) => {
  const queue = [];
  queue.push(start);

  const visited = [];

  visited[start] = true;

  const distances = [];

  distances[start] = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let i = 1; i < graph[node].length; i++) {
      if (graph[node][i] && !visited[i]) {
        visited[i] = true;
        distances[i] = distances[node] + 1;
        queue.push(i);
      }
    }
  }
  return distances;
};
