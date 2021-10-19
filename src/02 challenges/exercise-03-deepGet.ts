// Deep Get

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (objTarget, ...args) => {
  let result = { ...objTarget };
  for (let key of args) {
    result = result[key];
  }
  return result;
};

// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject)); // {a: 1, b: {...}}

// Deep Set

const mySetObject = {};
const deepSet = (value, objTarget, ...args) => {
  if (args.length === 0) {
    return;
  }
  let result = objTarget;
  args.forEach((key, index) => {
    if (index !== args.length - 1) {
      result[key] = result[key] ? result[key] : {};
      result = result[key];
    } else {
      result[key] = value;
    }
  });
};

deepSet(1, mySetObject, "a", "b");
console.log(JSON.stringify(mySetObject)); // {a: { b: 1}}
deepSet(2, mySetObject, "a", "c");
console.log(JSON.stringify(mySetObject)); // {a: { b: 1, c: 2}}
deepSet(3, mySetObject, "a");
console.log(JSON.stringify(mySetObject)); // {a: 3}
deepSet(4, mySetObject);
console.log(JSON.stringify(mySetObject)); // Do nothing // {a: 3}
