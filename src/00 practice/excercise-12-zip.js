// Zip

function zipObject(keys, values) {
  const objResult = {};
  for (let i = 0; i < values.length; i++) {
    objResult[keys[i]] = values[i];
  }

  return objResult;
}

console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);

function zipObject2(keys, values) {
  return values.reduce((acc, item, index) => {
    return {
      ...acc,
      [item]: values[index],
    };
  }, {});
}

console.log(zipObject2(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
console.log(
  zipObject2(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
