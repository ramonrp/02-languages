// Deep Equal

//A

var clonedUser = { name: "María", age: 30 };
// var user = { name: "María", age: 30 };
var user = { name: "María", age: 30, surname: "ruiz" };

function isEqual(a, b) {
  const aLenght = Object.keys(a).length;
  const bLenght = Object.keys(b).length;
  if (aLenght !== bLenght) return false;
  return equity(a, b);
}

function equity(objectA, objectB) {
  for (let prop in objectA) {
    if (
      objectA[prop] !== objectB[prop] ||
      !objectA.hasOwnProperty(prop) ||
      !objectB.hasOwnProperty(prop)
    ) {
      return false;
    }
  }
  return true;
}

//Deep equal

function isDeepEqual(a, b) {
  //in case of a function, compare function body
  if (typeof a == "function") {
    if (a.toString() !== b.toString()) return false;
  }
  //compare if both have exactly same of own properties
  const aLenght = Object.keys(a).length;
  const bLenght = Object.keys(b).length;
  if (aLenght !== bLenght) return false;

  //assume objects are equal
  let isEqual = true;
  for (let prop in a) {
    //if function / object and not special case null -> recursion
    if (
      (typeof a[prop] == "function" || typeof a[prop] == "object") &&
      a[prop] !== null
    ) {
      isEqual = isDeepEqual(a[prop], b[prop]);
      //if nested non-primitive is not equal, return false
      if (!isEqual) return false;
    } else {
      // in case a primitive property is not equal or isEqual but not own property, return false
      if (
        a[prop] !== b[prop] ||
        !a.hasOwnProperty(prop) ||
        !b.hasOwnProperty(prop)
      ) {
        return false;
      }
    }
  }
  return isEqual;
}

var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

console.log(isDeepEqual(user, clonedUser));
