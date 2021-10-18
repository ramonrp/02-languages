//clone Merge

//using spread
function clone(obj) {
  return { ...obj };
}

function merge(source, target) {
  return { ...target, ...source };
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

//not using spread

function clone2(obj) {
  const clonedObj = {};
  for (let prop in obj) {
    clonedObj[prop] = obj[prop];
  }
  return clonedObj;
}

function merge2(source, target) {
  for (let prop in source) {
    target[prop] = source[prop];
  }

  return target;
}

console.log(clone(a));
console.log(clone2(a));

console.log(merge(a, b));
console.log(merge2(a, b));
