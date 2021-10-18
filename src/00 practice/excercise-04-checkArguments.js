// check Arguments

function f(input) {
  //using implicit coercion to check if is null or undefined
  if (input == null) {
    return typeof input == "undefined" ? "Unknown" : "";
  }

  return input;
}

console.log(f("ramon"));
