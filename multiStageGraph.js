let INF = Number.MAX_VALUE;

function shortestDist(graph) {
  const N = graph[0].length;
  const cost = new Array(N);
  const dist = new Array(N - 1);
  const path = [];
  cost[N - 1] = 0;

  for (let i = N - 2; i >= 0; i--) {
    cost[i] = INF;

    for (let j = i; j < N; j++) {
      if (graph[i][j] === INF) continue;

      if (graph[i][j] + cost[j] < cost[i]) {
        cost[i] = graph[i][j] + cost[j];
        dist[i] = j;
      }
    }
  }

  let i = 0;
  let j = 0;

  while (i < N - 1) {
    path[j++] = dist[i];
    i = dist[i];
  }

  path.unshift(0);

  return { path, cost: cost[0] };
}

function shortestDist2(graph) {
  const stages = 4;
  let min;
  const n = graph.length;
  const cost = new Array(n + 1);
  const d = new Array(n + 1);
  const path = new Array(n + 1);

  cost[n] = 0;

  for (let i = n - 1; i >= 1; i--) {
    min = Number.MAX_VALUE;
    for (let k = i + 1; k <= n; k++) {
      if (graph[i][k] !== INF && graph[i][k] + cost[k] < min) {
        min = graph[i][k] + cost[k];
        d[i] = k;
      }
    }
    cost[i] = min;
  }

  path[0] = 1;
  path[stages] = n;
  console.log(d, cost);
  for (let i = 2; i < stages; i++) path[i] = path[d[i - 1]];
  return path;
}

let graph = [
  [INF, 1, 2, 5, INF, INF, INF, INF],
  [INF, INF, INF, INF, 4, 11, INF, INF],
  [INF, INF, INF, INF, 9, 5, 16, INF],
  [INF, INF, INF, INF, INF, INF, 2, INF],
  [INF, INF, INF, INF, INF, INF, INF, 18],
  [INF, INF, INF, INF, INF, INF, INF, 13],
  [INF, INF, INF, INF, INF, INF, INF, 2],
];

console.log(shortestDist(graph));
// console.log(shortestDist2(graph));
