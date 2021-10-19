console.log("************** DELIVERABLE 03 *********************");
//clone Merge

//using spread
function clone(obj) {
  return { ...obj };
}

function merge(source, target) {
  return { ...target, ...source };
}

var objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
var objectB = { name: "Luisa", age: 31, married: true };

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

console.log(clone(objectA));
console.log(clone2(objectA));

console.log(merge(objectA, objectB));
console.log(merge2(objectA, objectB));
