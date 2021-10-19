// Subsets

function subsets(word) {
  const subsets = [];
  for (let i = 1; i < word.length; i++) {
    subsets.push(word.slice(i));
  }

  return subsets;
}

console.log(subsets("message"));

function subsets2(word) {
  let newWord = word.slice(1).split("");
  return newWord.map((letter, index) => newWord.join("").slice(index));
}

console.log(subsets2("message"));
