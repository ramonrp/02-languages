// Array Operations

// A: head

function head([first, ...rest]) {
  return first;
}

console.log(head([1, 2, 3, 4]));

// B: tail

function tail([first, ...rest]) {
  return rest;
}

console.log(tail([1, 2, 3, 4]));

// c: init

function init(array) {
  return array.slice(0, -1);
}

console.log(init([1, 2, 3, 4]));

// d: last

function last(array) {
  return array[array.length - 1];
}

console.log(last([1, 2, 3, 4]));

//implementation with new https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

function last2(array) {
  return array.at(-1);
}

console.log(last2([1, 2, 3, 4]));
