console.log("************** DELIVERABLE 05 *********************");

class slotMachine {
  constructor() {
    this.count = 0;
  }
  play() {
    this.count += 1;
    const [first, second, third] = [
      randomBoolean(),
      randomBoolean(),
      randomBoolean(),
    ];
    if (first && second && third) {
      console.log(`Congratulations!!!. You won ${this.count} coins coins!!`);
      this.count = 0;
    } else {
      console.log(`Good luck next time!!`);
    }
  }
}

function randomBoolean() {
  return Math.random() < 0.5 ? true : false;
}

const player1 = new slotMachine();
player1.play();
player1.play();
player1.play();
player1.play();
player1.play();
player1.play();
player1.play();
player1.play();
