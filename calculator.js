class calc {
  constructor(args) {
    this.args = arguments;
  }

  sum() {
    return this.args;
  }
}

const x = new calc(4, 5, 6);
console.log(x.sum());