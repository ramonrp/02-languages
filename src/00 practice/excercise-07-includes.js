// includes: implement includes

function includes(array, value) {
  for (let item of array) {
    if (item === value) return true;
  }

  return false;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

// implement indexOf
function indexOf(array, value) {
  let indexResult = -1;
  array.forEach((item, index) => {
    if (item === value) {
      indexResult = index;
      return;
    }
  });
  return indexResult;
}

console.log(indexOf([1, 2, 3], 3)); // 2
console.log(indexOf([1, 2, 3], 0)); // -1
