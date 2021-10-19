// Curry Setter

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

function set(objToUpdate, propertyToUpdate, valueOfNewProperty) {
  return {
    ...objToUpdate,
    [propertyToUpdate]: valueOfNewProperty,
  };
}

const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

function setCurry(propertyToUpdate) {
  return function (objToUpdate, valueToUpdate) {
    return {
      ...objToUpdate,
      [propertyToUpdate]: valueToUpdate,
    };
  };
}

const setName = setCurry("name");
const setSurName = setCurry("surname");
const setAge = setCurry("age");

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
