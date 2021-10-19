// players order

const getPlayersOrder = (players, turns) => {
  let order = [...players];
  for (let i = 1; i <= turns; i++) {
    let [first, ...nexts] = order;
    order = [...nexts, first];
  }

  return order;
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
