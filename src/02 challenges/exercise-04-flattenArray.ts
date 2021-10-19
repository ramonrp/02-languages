// Flatten Array

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function multiFlatten(array) {
  let result = [];
  for (let item of array) {
    if (typeof item == "object") {
      result.push(...multiFlatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(multiFlatten([1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]]));
