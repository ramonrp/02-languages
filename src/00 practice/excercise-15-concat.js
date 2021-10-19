// Concat

//A
const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat([1, 2], [3, 4]));

const concatMulti = (...arrays) => {
  let finalArray = [];
  for (let array of arrays) {
    finalArray.push(...array);
  }
  return finalArray;
};

console.log(concatMulti([1, 2], [3, 4], [5, 6], [7, 8, 9]));
