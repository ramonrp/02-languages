// Values

//using Object.values
function values(obj) {
  return Object.values(obj);
}

///Using loops

function values2(obj) {
  const valuesArr = [];
  for (let prop in obj) {
    valuesArr.push(obj[prop]);
  }

  return valuesArr;
}

console.log(
  values2({ id: 31, duration: 310, name: "long video", format: "mp4" })
);
