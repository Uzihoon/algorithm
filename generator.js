function fetchList() {}

async function asyncFetchListWithAmount(amount = 5) {
  let cursor;
  const result = [];

  while(result.length < amount) {
    const { items } = await fetchList(cursor);
    if (items.length > 0) {
      result.push(...items);
      cursor = items[items.length-1].id;
    } else {
      break;
    }
  }
  return result.slice(0, amount);
}

async function asyncIteratorFetchListWithAmount(amount = 5) {
  const result = [];

  function fetchListIterator() {
    let totalAmountFetched = 0;
    let cursor;

    return {
      [Symbol.asyncIterator]() {
        return {
          async next() {
            const { items } = await fetchList(cursor);
            if (items.length === 0 || totalAmountFetched > amount) {
              return { done: true }
            }

            totalAmountFetched += items.length;
            cursor = items[items.length - 1].id;

            return {
              done: false,
              value: items;
            }
          }
        }
      }
    }
  }

  for await (const nextItems of fetchListIterator()) {
    result.push(...nextItems);
  }

  return result.slice(0, amount);
}

async function asyncGeneratorFetchListWithAmount(amount = 5) {
  const result = [];

  async function* fetchListGenerator() {
    let totalAmountFetched = 0;
    let cursor;

    while (totalAmountFetched < amount) {
      const { items } = await fetchList(cursor);
      if (items.length === 0) break;
      cursor = items[items.length - 1].id;
      totalAmountFetched += items.length;
      yield item;
    }
  }

  for await(const nextItems of fetchListGenerator()) {
    result.push(...nextItems);
  }

  return result.slice(0, amount);
}

function recursionFetchListWithAmount(amount = 5) {
  return new Promise((resolve) => {
    const result = [];
    function getItems(cursor) {
      fetchList(cursor).then(({ items }) => {
        result.push(...items);
        if (items.length === 0 || items.length >= amount) {
          return resolve(result.slice(0, amount));
        }
        getItems(itesm[items.length - 1].id);
      })
    }
    getItems();
  })
}