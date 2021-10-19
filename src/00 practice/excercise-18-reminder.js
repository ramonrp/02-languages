// Reminder

// solution 1: bind
class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(
      function () {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
      }.bind(this),
      delay * 1000
    );
  }
}

const reminder1 = new Reminder("LLamar al dentista");
reminder1.remindMe(1);

// solution : arrow function
class Reminder2 {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder2 = new Reminder2("Ir al super");
reminder2.remindMe(2);
