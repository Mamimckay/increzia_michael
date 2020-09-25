// EXERCICE 1

class NumberFormat {
  constructor(number1: [], number2: [], number3: []) {
    this.number1 = number1;
    this.number2 = number2;
    this.number3 = number3;
  }

  showArrayNumber() {
    console.log(
      `[
        [${this.number1}],
        [${this.number2}],
        [${this.number3}],
      ]
      `
    );
  }
}

let number1 = new NumberFormat([0, 1, 0], [1, 1, 0], [0, 0, 1]);
number1.showArrayNumber()

// EXERCICE 2

class SommeEntier {
  constructor(number: []) {
    this.number = number;
  }

  arrayRange() {
    let nbreRange = this.number;
    console.log(`tArray = [${nbreRange}]`);
  }

  positifEntier() {
    let nbreSplice = this.number.splice(2, (this.number.length -1))
    nbreSplice = nbreSplice.map((nbre) => {
      if (nbre > 0) {
        console.log(`sommeEntier(2,tArray) = ${nbre}`);
      }
    })
  }
}

let sommeNumber = new SommeEntier([0, 3, -5, 12, -18, -20]);
let sommeNumber2 = new SommeEntier([0, 3, -5, 12, -18, -20]);

sommeNumber.positifEntier();
sommeNumber2.arrayRange();