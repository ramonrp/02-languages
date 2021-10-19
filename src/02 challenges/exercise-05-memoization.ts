// memoization

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = (cb) => {
  let count = 0;
  let result;
  return function () {
    if (count == 0) {
      count++;
      result = cb();
    }
    return result;
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

//memoization with arguments

function memoize2(f) {
  let cache = [];
  let result;
  return function (...args) {
    console.log(cache);
    let isSameArguments = false;
    for (let previousArg of cache) {
      if (args.every((arg, index) => arg === previousArg[index])) {
        isSameArguments = true;
        return previousArg.at(-1);
      }
    }
    if (!isSameArguments) {
      cache.push(args);
      result = f(...args);
      cache.at(-1).push(result);
      return result;
    }
  };
}

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoizedGreet = memoize2(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); //2;
