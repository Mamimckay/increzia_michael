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

