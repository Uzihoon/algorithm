const test = {
  value: 0,
  children: [
    {
      value: 1,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 4,
          children: []
        }
      ]
    },
    {
      value: 2,
      children: [
        {
          value: 5,
          children: []
        },
        {
          value: 6,
          children: []
        }
      ]
    }
  ]
};

function dfs(start, target) {
  if (start.value === target) {
    return start;
  }

  for (let i = 0; i < start.children.length; i++) {
    const result = dfs(start.children[i], target);
    if (result) {
      console.log(result);
      return result;
    }
  }

  return null;
}

console.log(dfs(test, 5));
