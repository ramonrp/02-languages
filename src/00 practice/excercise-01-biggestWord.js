//Biggest Word

function biggestWord(phrase) {
  const wordsArray = phrase.split(" ");
  let longestWord = wordsArray[0];
  for (let word of wordsArray) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(biggestWord("La palabra más larga es esternocleidomastoideo"));
