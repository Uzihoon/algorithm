// function dump(string, ...values) {
//   return JSON.stringify({ string, values }, undefined, 4);
// }

// const what = 'ram';
// const where = 'rama lama ding dong';

// const result = dump`Who put the ${what} in the ${where}?`;

// console.log(result);

function integer(from = 0, to = Number.MAX_SAFE_INTEGER, step = 1) {
  return function () {
    if (from < to) {
      const result = from;
      from += step;
      return result;
    }
  };
}

function element(array, gen = integer(0, array.length)) {
  return function element_generator(...args) {
    const element_nr = gen(...args);
    if (element_nr !== undefined) {
      return array[element_nr];
    }
  };
}

function property(object, gen = element(Object.keys(object))) {
  return function property_generator(...args) {
    const key = gen(...args);
    if (key !== undefined) {
      return [key, object[key]];
    }
  };
}

function collect(generator, array) {
  return function collect_generator(...args) {
    const value = generator(...args);
    if (value !== undefined) {
      array.push(value);
    }
    return value;
  };
}

function repeat(generator) {
  if (generator() !== undefined) {
    return repeat(generator);
  }
}

const my_array = [];
repeat(collect(integer(0, 7), my_array));
console.log(my_array);

function harvest(generator) {
  const array = [];
  repeat(collect(generator, array));
  return array;
}

const result = harvest(integer(0, 7));

function limit(generator, count = 1) {
  return function (...args) {
    if (count >= 1) {
      count -= 1;
      return generator(...args);
    }
  };
}

function filter(generator, predicate) {
  return function filter_generator(...args) {
    const value = generator(...args);
    if (value !== undefined && !predicate(value)) {
      return filter_generator(...args);
    }
    return value;
  };
}

const my_third_array = harvest(
  filter(integer(0, 42), function divisible_by_three(value) {
    return value % 3 === 0;
  })
);

console.log(my_third_array);

function concat(...generators) {
  const next = element(generators);

  let generator = next();
  return function concat_generator(...args) {
    if (generator !== undefined) {
      const value = generator(...args);
      if (value === undefined) {
        generator = next();
        return concat_generator(...args);
      }

      return value;
    }
  };
}

function join(func, ...gens) {
  return function join_generator() {
    return func(
      ...gens.map(function (gen) {
        return gen();
      })
    );
  };
}

function map(array, func) {
  return harvest(join(func, element(array)));
}

function objectify(...names) {
  return function objectify_constructor(...values) {
    const object = Object.create(null);
    names.forEach(function (name, name_nr) {
      object[name] = values[name_nr];
    });

    return object;
  };
}

function test() {
  console.log(this.a);
}

const b = Object.create(test.prototype);

console.log(b.test);

function counter_constructor() {
  let counter = 0;

  function up() {
    counter += 1;
    return counter;
  }

  function down() {
    counter -= 1;
    return counter;
  }

  return Object.freeze({
    up,
    down,
  });
}

function continuize(any) {
  return function hero(continuation, ...args) {
    return continuation(any(...args));
  };
}
