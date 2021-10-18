// Dices

function dices() {
  let dicesNumber = [null, null];

  const publicApi = {
    reset() {
      dicesNumber = [null, null];
    },
    showResult() {
      if (dicesNumber[0] == null) {
        console.log("Tira los dados para ver el resultado");
        return;
      }
      console.log(
        `El resultado de la tirada es dado1: ${dicesNumber[0]} y el dado 2: ${dicesNumber[1]}`
      );
      if (dicesNumber[0] === 6 && dicesNumber[1] === 6) {
        console.log("PREMIO!!! doble tirada de 6, ganas 1000€");
      }
    },
    rollDices() {
      const newNumbers = dicesNumber.map((number) => {
        return Math.floor(Math.random() * 6 + 1);
      });

      dicesNumber = newNumbers;
    },
  };

  return publicApi;
}

const newPlayer = dices();
newPlayer.showResult();
newPlayer.rollDices();
newPlayer.showResult();
newPlayer.reset();
